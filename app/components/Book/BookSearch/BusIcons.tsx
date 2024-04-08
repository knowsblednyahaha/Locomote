import {
  Airplay,
  AirVent,
  DoorOpen,
  MapPinned,
  Music,
  Tv2,
  Wifi,
} from "lucide-react";
import React from "react";

export function Deluxe() {
  return (
    <>
      <Wifi size={16} />
      <Tv2 size={16} />
      <AirVent size={16} />
      <Music size={16} />
    </>
  );
}

export function SuperDeluxe() {
  return (
    <>
      <Wifi size={16} />
      <Tv2 size={16} />
      <AirVent size={16} />
      <Music size={16} />
      <DoorOpen size={16} />
      <MapPinned size={16} />
    </>
  );
}

export function FirstClassExpress() {
  return (
    <>
      <Wifi size={16} />
      <Tv2 size={16} />
      <AirVent size={16} />
      <Music size={16} />
      <MapPinned size={16} />
    </>
  );
}

export function LuxuryBus() {
  return (
    <>
      <Wifi size={16} />
      <Tv2 size={16} />
      <AirVent size={16} />
      <Music size={16} />
      <Airplay />
      <DoorOpen size={16} />
      <MapPinned size={16} />
    </>
  );
}
