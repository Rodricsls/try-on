import { bootstrapCameraKit } from "@snap/camera-kit";

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken:
      "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM0MDU5Nzc3LCJzdWIiOiJlNjIzMWU2Ni1lYjhhLTQxNGUtYjBlYy01MDFjNmE4ZDVjZTh-U1RBR0lOR340YmQwM2NmMi01NGVlLTQ1YmQtODUyYi05YjcxYTk1MDM2NjIifQ.GNZfZUIBF-wh_5YByeVKK0hcED0UsBxZlapv6W8gi_A",
  });

  const liveRenderTarget = document.getElementById(
    "canvas",
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });

  // Request the back camera
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { exact: "environment" }, // Request back camera
    },
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    "0e9e3f82-1be7-4a44-b905-6287ede79685",
    "7b9168ad-3f44-44d7-9677-a8547f885faf",
  );

  await session.applyLens(lens);
})();
