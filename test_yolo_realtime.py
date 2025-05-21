import cv2
import time
from ultralytics import YOLO
import numpy as np

# Cargar modelos
model_suspicious = YOLO("app/models/yolo_suspicious.pt")
model_arms = YOLO("app/models/yolo_armas.pt")
model_coco = YOLO("app/models/yolo_coco.pt")  # Preentrenado en COCO

# OPCIÓN A: usar webcam local (índice 0 o 1 según tu sistema)
camera_source = 0  # <- Cámara local

# OPCIÓN B: usar IP cam (comentar si estás usando cámara local)
# camera_source = "http://192.168.90.107:8080/video"  # Cámara IP externa

# Iniciar captura
cap = cv2.VideoCapture(camera_source)

if not cap.isOpened():
    print("❌ No se pudo conectar a la cámara.")
    exit()

print("✅ Cámara conectada. Mostrando video con detecciones...")

# Tiempo de duración: 3 minutos
start_time = time.time()
duration = 3 * 60  # en segundos

# Bucle principal
while True:
    ret, frame = cap.read()
    if not ret:
        print("⚠️ No se pudo leer el fotograma.")
        break

    # Detecciones con los modelos personalizados
    results_susp = model_suspicious.predict(
        source=frame, conf=0.5, verbose=False)
    results_arms = model_arms.predict(source=frame, conf=0.5, verbose=False)
    results_people = model_coco.predict(
        source=frame, conf=0.5, classes=[0], verbose=False)

    people_count = len(results_people[0].boxes)

    # Dibujar resultados
    for result in [results_susp, results_arms, results_people]:
        names = result[0].names
        for box in result[0].boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            label = f"{names[cls]} {conf:.2f}"
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            color = (0, 255, 0) if names[cls] == "person" else (0, 0, 255)
            cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
            cv2.putText(frame, label, (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

    # Mostrar contador de personas detectadas
    cv2.putText(frame, f"Personas detectadas: {people_count}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 0), 2)

    # Mostrar imagen
    cv2.imshow("Detección en Tiempo Real con YOLO", frame)

    # Condiciones de salida
    if cv2.waitKey(1) & 0xFF == 27 or (time.time() - start_time > duration):
        break

# Liberar recursos
cap.release()
cv2.destroyAllWindows()
