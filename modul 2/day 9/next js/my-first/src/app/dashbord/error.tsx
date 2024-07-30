"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <h1>
      {error.message
        ? error.message
        : "Sorry I am a dissapointment. Please contact my parent at +628989097010"}
    </h1>
  );
}
