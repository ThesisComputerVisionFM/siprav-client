import cv2
import time
from ultralytics import YOLO
import numpy as np

# Cargar modelos
model_suspicious = YOLO("app/models/yolo_suspicious.pt")
model_arms = YOLO("app/models/yolo_armas.pt")
model_coco = YOLO("app/models/yolo_coco.pt")  # Preentrenado en COCO

# Ruta de la cámara
camera_url = "http://192.168.90.107:8080/video"  # Ajusta si es RTSP o HTTP

# Iniciar captura
cap = cv2.VideoCapture(camera_url)

if not cap.isOpened():
    print("❌ No se pudo conectar a la cámara.")
    exit()

print("✅ Conectado. Mostrando video con detecciones...")

# Duración: 3 minutos
start_time = time.time()
duration = 5 * 60  # en segundos

# Bucle de lectura y detección
while True:
    ret, frame = cap.read()
    if not ret:
        print("⚠️ No se pudo leer el fotograma.")
        break

    detections = []

    # Suspicious activity
    results_susp = model_suspicious.predict(
        source=frame, conf=0.5, verbose=False)
    detections.extend(results_susp[0].boxes.data.cpu().numpy())

    # Arms
    results_arms = model_arms.predict(source=frame, conf=0.5, verbose=False)
    detections.extend(results_arms[0].boxes.data.cpu().numpy())

    # Personas con COCO
    results_people = model_coco.predict(
        source=frame, conf=0.5, classes=[0], verbose=False)
    people_count = len(results_people[0].boxes)

    # Dibujar cajas y etiquetas
    for result in [results_susp, results_arms, results_people]:
        names = result[0].names
        for box in result[0].boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            label = f"{names[cls]} {conf:.2f}"
            x1, y1, x2, y2 = map(int, box.xyxy[0])

            color = (0, 255, 0) if names[cls] == "person" else (0, 0, 255)
            cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
            cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX,
                        0.6, color, 2)

    # Mostrar conteo de personas
    cv2.putText(frame, f"Personas detectadas: {people_count}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 0), 2)

    # Mostrar imagen
    cv2.imshow("YOLO - Monitoreo en Tiempo Real", frame)

    # Salir con ESC o al llegar a los 3 minutos
    if cv2.waitKey(1) & 0xFF == 27 or (time.time() - start_time > duration):
        break

# Liberar recursos
cap.release()
cv2.destroyAllWindows()
