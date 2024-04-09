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
import { Tooltip } from "react-tooltip";

export function Deluxe() {
  return (
    <>
      <Wifi
        size={16}
        className="cursor-pointer"
        data-tooltip-id="wifiTooltip"
        data-tooltip-content="Wifi"
      />
      <Tv2
        size={16}
        className="cursor-pointer"
        data-tooltip-id="tvTooltip"
        data-tooltip-content="TV"
      />
      <AirVent
        size={16}
        className="cursor-pointer"
        data-tooltip-id="airVentTooltip"
        data-tooltip-content="Airconditioned"
      />
      <Music
        size={16}
        className="cursor-pointer"
        data-tooltip-id="musicTooltip"
        data-tooltip-content="Music"
      />
      {/* Tooltips */}
      <Tooltip id="wifiTooltip" place="bottom" />
      <Tooltip id="tvTooltip" place="bottom" />
      <Tooltip id="airVentTooltip" place="bottom" />
      <Tooltip id="musicTooltip" place="bottom" />
    </>
  );
}

export function SuperDeluxe() {
  return (
    <>
      <Wifi
        size={16}
        className="cursor-pointer"
        data-tooltip-id="wifiTooltip"
        data-tooltip-content="Wifi"
      />
      <Tv2
        size={16}
        className="cursor-pointer"
        data-tooltip-id="tvTooltip"
        data-tooltip-content="TV"
      />
      <AirVent
        size={16}
        className="cursor-pointer"
        data-tooltip-id="airVentTooltip"
        data-tooltip-content="Airconditioned"
      />
      <Music
        size={16}
        className="cursor-pointer"
        data-tooltip-id="musicTooltip"
        data-tooltip-content="Music"
      />
      <DoorOpen
        size={16}
        className="cursor-pointer"
        data-tooltip-id="crTooltip"
        data-tooltip-content="Comfort Room"
      />
      <MapPinned
        size={16}
        className="cursor-pointer"
        data-tooltip-id="gpsToolTip"
        data-tooltip-content="GPS"
      />

      {/* Tooltips */}
      <Tooltip id="wifiTooltip" place="bottom" />
      <Tooltip id="tvTooltip" place="bottom" />
      <Tooltip id="airVentTooltip" place="bottom" />
      <Tooltip id="musicTooltip" place="bottom" />
      <Tooltip id="crTooltip" place="bottom" />
      <Tooltip id="gpsToolTip" place="bottom" />
    </>
  );
}

export function FirstClassExpress() {
  return (
    <>
      <Wifi
        size={16}
        className="cursor-pointer"
        data-tooltip-id="wifiTooltip"
        data-tooltip-content="Wifi"
      />
      <Tv2
        size={16}
        className="cursor-pointer"
        data-tooltip-id="tvTooltip"
        data-tooltip-content="TV"
      />
      <AirVent
        size={16}
        className="cursor-pointer"
        data-tooltip-id="airVentTooltip"
        data-tooltip-content="Airconditioned"
      />
      <Music
        size={16}
        className="cursor-pointer"
        data-tooltip-id="musicTooltip"
        data-tooltip-content="Music"
      />
      <MapPinned
        size={16}
        className="cursor-pointer"
        data-tooltip-id="gpsToolTip"
        data-tooltip-content="GPS"
      />
      <Tooltip id="wifiTooltip" place="bottom" />
      <Tooltip id="tvTooltip" place="bottom" />
      <Tooltip id="airVentTooltip" place="bottom" />
      <Tooltip id="musicTooltip" place="bottom" />
      <Tooltip id="gpsToolTip" place="bottom" />
    </>
  );
}

export function LuxuryBus() {
  return (
    <>
      <Wifi
        size={16}
        className="cursor-pointer"
        data-tooltip-id="wifiTooltip"
        data-tooltip-content="Wifi"
      />
      <Tv2
        size={16}
        className="cursor-pointer"
        data-tooltip-id="tvTooltip"
        data-tooltip-content="TV"
      />
      <AirVent
        size={16}
        className="cursor-pointer"
        data-tooltip-id="airVentTooltip"
        data-tooltip-content="Airconditioned"
      />
      <Music
        size={16}
        className="cursor-pointer"
        data-tooltip-id="musicTooltip"
        data-tooltip-content="Music"
      />
      <Airplay
        size={16}
        className="cursor-pointer"
        data-tooltip-id="screenTooltip"
        data-tooltip-content="Personal Screen"
      />
      <DoorOpen
        size={16}
        className="cursor-pointer"
        data-tooltip-id="crTooltip"
        data-tooltip-content="Comfort Room"
      />
      <MapPinned
        size={16}
        className="cursor-pointer"
        data-tooltip-id="gpsToolTip"
        data-tooltip-content="GPS"
      />

      <Tooltip id="wifiTooltip" place="bottom" />
      <Tooltip id="tvTooltip" place="bottom" />
      <Tooltip id="airVentTooltip" place="bottom" />
      <Tooltip id="musicTooltip" place="bottom" />
      <Tooltip id="screenTooltip" place="bottom" />
      <Tooltip id="crTooltip" place="bottom" />
      <Tooltip id="gpsToolTip" place="bottom" />
    </>
  );
}
