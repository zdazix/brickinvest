import L from "leaflet";
import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";
import { useLocale } from "@/lib/i18n";

const LOCATION: L.LatLngExpression = [55.751_244, 37.618_423];

export const LocationMap = () => {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    const map = L.map(container, {
      center: LOCATION,
      scrollWheelZoom: false,
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.circleMarker(LOCATION, {
      color: primaryColor,
      fillColor: primaryColor,
      fillOpacity: 0.35,
      radius: 12,
      weight: 4,
    })
      .addTo(map)
      .bindPopup(t("yourLocation"))
      .openPopup();

    const resizeFrame = requestAnimationFrame(() => map.invalidateSize());

    return () => {
      cancelAnimationFrame(resizeFrame);
      map.remove();
    };
  }, [t]);

  return (
    <div
      aria-label={t("locationMap")}
      className="relative isolate z-0 aspect-[4/3] size-full overflow-hidden rounded-[2rem] border border-border bg-muted"
      ref={containerRef}
      role="region"
    />
  );
};
