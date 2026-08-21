(function () {
  "use strict";

  /* ============================================================
     PINE CAREERS INTERACTIVE WORLD DOT MAP
     ============================================================ */

  const MAP_WIDTH = 1000;
  const MAP_HEIGHT = 430;

  /* ============================================================
     DOT CONFIGURATION
     ============================================================ */

  const DOT_SPACING = 8.2;
  const DOT_SIZE = 1.75;
  const ACTIVE_DOT_SIZE = 2.45;

  const DOT_EDGE_MARGIN = 18;

  /* ============================================================
     INDIA
     ============================================================ */

  const INDIA = {
    lon: 79.5,
    lat: 23.5
  };

  /* ============================================================
     WORLD GEOJSON
     ============================================================ */

  const WORLD_GEOJSON =
    "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

  /* ============================================================
     ORIGIN CITIES
     ============================================================ */

  const ORIGINS = [
    {
      name: "San Francisco",
      tag: "Building India's tech future",
      lon: -122.4,
      lat: 37.8
    },
    {
      name: "New York",
      tag: "Finance leaders returning home",
      lon: -74.0,
      lat: 40.7
    },
    {
      name: "Toronto",
      tag: "Finance and tech leaders",
      lon: -79.4,
      lat: 43.7
    },
    {
      name: "Calgary",
      tag: "Energy and engineering talent",
      lon: -114.1,
      lat: 51.0
    },
    {
      name: "São Paulo",
      tag: "Latin America's business hub",
      lon: -46.6,
      lat: -23.5
    },
    {
      name: "Buenos Aires",
      tag: "Diaspora across the Americas",
      lon: -58.4,
      lat: -34.6
    },
    {
      name: "Lima",
      tag: "Pacific coast connections",
      lon: -76.0,
      lat: -11.5
    },
    {
      name: "Lagos",
      tag: "West Africa's economic engine",
      lon: 3.4,
      lat: 6.5
    },
    {
      name: "Nairobi",
      tag: "East Africa's innovation hub",
      lon: 36.8,
      lat: -1.3
    },
    {
      name: "Cairo",
      tag: "Ancient ties, modern ambition",
      lon: 31.2,
      lat: 30.0
    },
    {
      name: "Cape Town",
      tag: "Southern diaspora giving back",
      lon: 18.4,
      lat: -33.9
    },
    {
      name: "London",
      tag: "Alumni mentoring the next gen",
      lon: -0.1,
      lat: 51.5
    },
    {
      name: "Paris",
      tag: "European research and culture",
      lon: 2.3,
      lat: 48.9
    },
    {
      name: "Amsterdam",
      tag: "Trade and finance capital",
      lon: 4.9,
      lat: 52.4
    },
    {
      name: "Berlin",
      tag: "Global minds, Indian roots",
      lon: 13.4,
      lat: 52.5
    },
    {
      name: "Moscow",
      tag: "Bridge across Eurasia",
      lon: 37.6,
      lat: 55.8
    },
    {
      name: "Dubai",
      tag: "Close to home, global reach",
      lon: 55.3,
      lat: 25.2
    },
    {
      name: "Singapore",
      tag: "Asia's bridge to India",
      lon: 103.8,
      lat: 1.35
    },
    {
      name: "Tokyo",
      tag: "Innovation crossing borders",
      lon: 139.7,
      lat: 35.7
    },
    {
      name: "Sydney",
      tag: "Diaspora giving back",
      lon: 151.2,
      lat: -33.9
    },
    {
      name: "Melbourne",
      tag: "Global alumni network",
      lon: 144.9,
      lat: -37.8
    },
    {
      name: "Vancouver",
      tag: "Canadian alumni network",
      lon: -123.1,
      lat: 49.3
    },
    {
      name: "Chicago",
      tag: "Business and technology talent",
      lon: -87.6,
      lat: 41.9
    },
    {
      name: "Boston",
      tag: "Research and innovation",
      lon: -71.1,
      lat: 42.4
    },
    {
      name: "Los Angeles",
      tag: "Creative and technology talent",
      lon: -118.2,
      lat: 34.0
    },
    {
      name: "Washington DC",
      tag: "Policy and global leadership",
      lon: -77.0,
      lat: 38.9
    },
    {
      name: "Madrid",
      tag: "European alumni network",
      lon: -3.7,
      lat: 40.4
    },
    {
      name: "Rome",
      tag: "Culture and global education",
      lon: 12.5,
      lat: 41.9
    },
    {
      name: "Zurich",
      tag: "Finance and innovation",
      lon: 8.5,
      lat: 47.4
    },
    {
      name: "Johannesburg",
      tag: "Africa's business centre",
      lon: 28.0,
      lat: -26.2
    },
    {
      name: "Accra",
      tag: "West Africa's growing talent",
      lon: -0.2,
      lat: 5.6
    },
    {
      name: "Addis Ababa",
      tag: "East Africa's emerging hub",
      lon: 38.7,
      lat: 9.0
    },
    {
      name: "Riyadh",
      tag: "Middle East's business network",
      lon: 46.7,
      lat: 24.7
    },
    {
      name: "Doha",
      tag: "Global business connections",
      lon: 51.5,
      lat: 25.3
    },
    {
      name: "Hong Kong",
      tag: "Asia's global gateway",
      lon: 114.2,
      lat: 22.3
    },
    {
      name: "Seoul",
      tag: "Technology and innovation",
      lon: 126.9,
      lat: 37.6
    }
  ];

  /* ============================================================
     COUNTRY NAME
     ============================================================ */

  function getCountryName(feature) {
    if (!feature) {
      return "Country";
    }

    const properties = feature.properties || {};

    return (
      properties.ADMIN ||
      properties.NAME_EN ||
      properties.NAME_LONG ||
      properties.NAME ||
      properties.name ||
      properties.admin ||
      "Country"
    );
  }

  /* ============================================================
     PROJECTION
     ============================================================ */

  function project(lon, lat) {
    const x =
      ((lon + 180) / 360) *
      MAP_WIDTH;

    const maxLat = 85;
    const minLat = -60;

    const safeLat = Math.max(
      minLat,
      Math.min(maxLat, lat)
    );

    const y =
      ((maxLat - safeLat) /
        (maxLat - minLat)) *
      MAP_HEIGHT;

    return [x, y];
  }

  /* ============================================================
     POINT IN POLYGON
     ============================================================ */

  function pointInPolygon(point, polygon) {
    const x = point[0];
    const y = point[1];

    let inside = false;

    for (
      let i = 0,
        j = polygon.length - 1;
      i < polygon.length;
      j = i++
    ) {
      const xi = polygon[i][0];
      const yi = polygon[i][1];

      const xj = polygon[j][0];
      const yj = polygon[j][1];

      const intersect =
        yi > y !== yj > y &&
        x <
          ((xj - xi) * (y - yi)) /
            ((yj - yi) || 0.00001) +
          xi;

      if (intersect) {
        inside = !inside;
      }
    }

    return inside;
  }

  /* ============================================================
     FEATURE BOUNDS
     ============================================================ */

  function getFeatureBounds(feature) {
    const geometry = feature.geometry;

    let minLon = Infinity;
    let maxLon = -Infinity;
    let minLat = Infinity;
    let maxLat = -Infinity;

    if (!geometry) {
      return null;
    }

    function inspectCoordinates(coords) {
      if (
        Array.isArray(coords) &&
        typeof coords[0] === "number"
      ) {
        const lon = coords[0];
        const lat = coords[1];

        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);

        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);

        return;
      }

      if (!Array.isArray(coords)) {
        return;
      }

      for (let i = 0; i < coords.length; i++) {
        inspectCoordinates(coords[i]);
      }
    }

    inspectCoordinates(
      geometry.coordinates
    );

    if (
      !isFinite(minLon) ||
      !isFinite(maxLon)
    ) {
      return null;
    }

    return {
      minLon,
      maxLon,
      minLat,
      maxLat
    };
  }

  /* ============================================================
     POINT INSIDE FEATURE
     ============================================================ */

  function pointInsideFeature(
    lon,
    lat,
    feature
  ) {
    const geometry = feature.geometry;

    if (!geometry) {
      return false;
    }

    const bounds = feature.__bounds;

    if (bounds) {
      if (
        lon < bounds.minLon ||
        lon > bounds.maxLon ||
        lat < bounds.minLat ||
        lat > bounds.maxLat
      ) {
        return false;
      }
    }

    const point = [lon, lat];
    const coordinates = geometry.coordinates;

    if (geometry.type === "Polygon") {
      if (
        !pointInPolygon(
          point,
          coordinates[0]
        )
      ) {
        return false;
      }

      for (
        let i = 1;
        i < coordinates.length;
        i++
      ) {
        if (
          pointInPolygon(
            point,
            coordinates[i]
          )
        ) {
          return false;
        }
      }

      return true;
    }

    if (
      geometry.type === "MultiPolygon"
    ) {
      for (
        let p = 0;
        p < coordinates.length;
        p++
      ) {
        const polygon = coordinates[p];

        if (
          !pointInPolygon(
            point,
            polygon[0]
          )
        ) {
          continue;
        }

        let hole = false;

        for (
          let h = 1;
          h < polygon.length;
          h++
        ) {
          if (
            pointInPolygon(
              point,
              polygon[h]
            )
          ) {
            hole = true;
            break;
          }
        }

        if (!hole) {
          return true;
        }
      }
    }

    return false;
  }

  /* ============================================================
     ESCAPE HTML
     ============================================================ */

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ============================================================
     ARC PATH
     ============================================================ */

  function arcPath(
    sx,
    sy,
    ex,
    ey,
    lift
  ) {
    lift =
      typeof lift === "number"
        ? lift
        : 0.28;

    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2;

    const dx = ex - sx;
    const dy = ey - sy;

    const len =
      Math.hypot(dx, dy) || 1;

    let nx = -dy / len;
    let ny = dx / len;

    if (ny > 0) {
      nx = -nx;
      ny = -ny;
    }

    const cx =
      mx + nx * len * lift;

    const cy =
      my + ny * len * lift;

    return (
      "M " +
      sx.toFixed(1) +
      " " +
      sy.toFixed(1) +
      " Q " +
      cx.toFixed(1) +
      " " +
      cy.toFixed(1) +
      " " +
      ex.toFixed(1) +
      " " +
      ey.toFixed(1)
    );
  }

  /* ============================================================
     GEOMETRY → SVG PATH
     ============================================================ */

  function geometryToPath(geometry) {
    if (!geometry) {
      return "";
    }

    function ringToPath(ring) {
      let path = "";

      for (
        let i = 0;
        i < ring.length;
        i++
      ) {
        const lon = ring[i][0];
        const lat = ring[i][1];

        const [x, y] =
          project(lon, lat);

        path +=
          (i === 0 ? "M " : "L ") +
          x.toFixed(2) +
          " " +
          y.toFixed(2) +
          " ";
      }

      return path + "Z ";
    }

    if (
      geometry.type === "Polygon"
    ) {
      return geometry.coordinates
        .map(ringToPath)
        .join("");
    }

    if (
      geometry.type === "MultiPolygon"
    ) {
      return geometry.coordinates
        .map(polygon =>
          polygon
            .map(ringToPath)
            .join("")
        )
        .join("");
    }

    return "";
  }

  /* ============================================================
     INITIALIZE MAP
     ============================================================ */

  async function initHeroMap() {
    const container =
      document.getElementById(
        "worldMap"
      );

    if (!container) {
      return;
    }

    /* ==========================================================
       LOADING
       ========================================================== */

    container.innerHTML = `
      <div class="wm-loading">
        Loading global network...
      </div>
    `;

    let world;

    try {
      const response =
        await fetch(
          WORLD_GEOJSON,
          {
            cache: "force-cache"
          }
        );

      if (!response.ok) {
        throw new Error(
          "World map data could not be loaded."
        );
      }

      world =
        await response.json();

    } catch (error) {
      console.error(
        "Hero map:",
        error
      );

      container.innerHTML = `
        <div class="wm-error">
          World map unavailable.
        </div>
      `;

      return;
    }

    const features =
      world.features || [];

    /* ==========================================================
       PRE-COMPUTE BOUNDS
       ========================================================== */

    features.forEach(feature => {
      feature.__bounds =
        getFeatureBounds(
          feature
        );
    });

    /* ==========================================================
       INDIA POSITION
       ========================================================== */

    const [
      indiaX,
      indiaY
    ] =
      project(
        INDIA.lon,
        INDIA.lat
      );

    /* ==========================================================
       WORLD DOTS
       ========================================================== */

    let dotsHTML = "";

    const DOT_SAFE_LEFT =
      DOT_EDGE_MARGIN +
      DOT_SIZE;

    const DOT_SAFE_RIGHT =
      MAP_WIDTH -
      DOT_EDGE_MARGIN -
      DOT_SIZE;

    const DOT_SAFE_TOP =
      DOT_EDGE_MARGIN +
      DOT_SIZE;

    const DOT_SAFE_BOTTOM =
      MAP_HEIGHT -
      DOT_EDGE_MARGIN -
      DOT_SIZE;

    for (
      let y = DOT_SAFE_TOP;
      y <= DOT_SAFE_BOTTOM;
      y += DOT_SPACING
    ) {
      const lat =
        85 -
        (y / MAP_HEIGHT) *
          145;

      for (
        let x = DOT_SAFE_LEFT;
        x <= DOT_SAFE_RIGHT;
        x += DOT_SPACING
      ) {
        if (
          x - DOT_SIZE <=
            DOT_EDGE_MARGIN ||
          x + DOT_SIZE >=
            MAP_WIDTH -
              DOT_EDGE_MARGIN ||
          y - DOT_SIZE <=
            DOT_EDGE_MARGIN ||
          y + DOT_SIZE >=
            MAP_HEIGHT -
              DOT_EDGE_MARGIN
        ) {
          continue;
        }

        const lon =
          (x / MAP_WIDTH) *
            360 -
          180;

        let countryIndex = -1;

        for (
          let c = 0;
          c < features.length;
          c++
        ) {
          if (
            pointInsideFeature(
              lon,
              lat,
              features[c]
            )
          ) {
            countryIndex = c;
            break;
          }
        }

        if (
          countryIndex !== -1
        ) {
          dotsHTML += `
            <circle
              class="wm-dot"
              cx="${x.toFixed(2)}"
              cy="${y.toFixed(2)}"
              r="${DOT_SIZE}"
              data-country="${countryIndex}"
            />
          `;
        }
      }
    }

    /* ==========================================================
       COUNTRY HIT AREAS
       ========================================================== */

    let countriesHTML = "";

    features.forEach(
      (
        feature,
        index
      ) => {
        const rawName =
          getCountryName(
            feature
          );

        const path =
          geometryToPath(
            feature.geometry
          );

        if (!path) {
          return;
        }

        countriesHTML += `
          <path
            class="wm-country-hit"
            data-country="${index}"
            d="${path}"
            tabindex="0"
            aria-label="${escapeHTML(
              rawName
            )}"
          />
        `;
      }
    );

    /* ==========================================================
       ORIGIN DATA
       ========================================================== */

    const originData =
      ORIGINS.map(origin => {
        const [
          x,
          y
        ] =
          project(
            origin.lon,
            origin.lat
          );

        return {
          ...origin,
          x,
          y
        };
      });

    /* ==========================================================
       ORIGIN CITIES
       ========================================================== */

    let originsHTML = "";

    originData.forEach(
      (
        origin,
        index
      ) => {
        originsHTML += `
          <g
            class="wm-origin"
            data-origin="${index}"
            tabindex="0"
            role="button"
            aria-label="${escapeHTML(
              origin.name
            )}: ${escapeHTML(
              origin.tag
            )}"
          >

            <circle
              class="wm-origin-pulse"
              cx="${origin.x}"
              cy="${origin.y}"
              r="2.4"
            />

            <circle
              class="wm-origin-core"
              cx="${origin.x}"
              cy="${origin.y}"
              r="2.1"
            />

            <circle
              class="wm-origin-hit"
              cx="${origin.x}"
              cy="${origin.y}"
              r="13"
            />

          </g>

          <g
            class="wm-city-label"
            data-city-label="${index}"
            transform="translate(${origin.x}, ${origin.y})"
          >

            <line
              x1="0"
              y1="-8"
              x2="0"
              y2="-20"
              class="wm-city-line"
            />

            <rect
              x="-82"
              y="-66"
              width="164"
              height="46"
              rx="7"
              class="wm-city-label-bg"
            />

            <text
              x="0"
              y="-46"
              class="wm-city-label-name"
            >
              ${escapeHTML(
                origin.name
              )}
            </text>

            <text
              x="0"
              y="-31"
              class="wm-city-label-tag"
            >
              ${escapeHTML(
                origin.tag
              )}
            </text>

          </g>
        `;
      }
    );

    /* ==========================================================
       ROUTES + COMETS
       ========================================================== */

    let routesHTML = "";

    originData.forEach(
      (
        origin,
        index
      ) => {
        const d =
          arcPath(
            origin.x,
            origin.y,
            indiaX,
            indiaY,
            0.27
          );

        routesHTML += `
          <g
            class="wm-route"
            data-origin="${index}"
          >

            <path
              class="wm-route-line"
              d="${d}"
            />

            <g class="wm-comet">

              <circle
                class="wm-comet-glow"
                cx="0"
                cy="0"
                r="16"
              />

              <circle
                class="wm-comet-body"
                cx="0"
                cy="0"
                r="5"
              />

              <circle
                class="wm-comet-core"
                cx="0"
                cy="0"
                r="2.5"
              />

              <animateMotion
                dur="${
                  3.2 +
                  (index % 5) *
                    0.35
                }s"
                begin="${
                  index * 0.13
                }s"
                repeatCount="indefinite"
                rotate="auto"
                path="${d}"
              />

            </g>

          </g>
        `;
      }
    );

    /* ==========================================================
       COMPLETE MAP
       ========================================================== */

    container.innerHTML = `
      <style>

        /* ======================================================
           CONTAINER
           ====================================================== */

        #worldMap {
          width: 100%;
          height: 100%;
          min-height: 470px;
          position: relative;
          overflow: hidden;
          user-select: none;
        }

        #worldMap svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: hidden;
            transform: translateY(-55px);

        }

        /* ======================================================
           NORMAL DOTS
           ====================================================== */

        .wm-dot {
          fill: rgba(255, 255, 255, .43);
          opacity: .88;
          pointer-events: none;

          transition:
            fill .18s ease,
            opacity .18s ease,
            r .18s ease;
        }

        /* ======================================================
           ACTIVE COUNTRY DOTS
           ====================================================== */

        .wm-dot.country-active {
          fill: #E4C883;
          opacity: 1;
          r: ${ACTIVE_DOT_SIZE};

          filter:
            drop-shadow(
              0 0 2px
              rgba(228, 200, 131, .6)
            );
        }

        /* ======================================================
           COUNTRY HIT AREAS
           ====================================================== */

        .wm-country-hit {
          fill: transparent;
          stroke: transparent;
          cursor: pointer;
          pointer-events: all;
          outline: none;
        }

        .wm-country-hit:hover,
        .wm-country-hit:focus {
          fill: rgba(228, 200, 131, .025);
          outline: none;
        }

        /* ======================================================
           ROUTES
           ====================================================== */

        .wm-route-line {
          fill: none;
          stroke: #C99A3C;
          stroke-width: 1;
          stroke-linecap: round;
          opacity: .23;

          transition:
            opacity .3s ease,
            stroke-width .3s ease;
        }

        .wm-route.route-active
        .wm-route-line {
          stroke: #E4C883;
          stroke-width: 2;
          opacity: .95;
        }

        .wm-route.route-dim
        .wm-route-line {
          opacity: .23;
        }

        /* ======================================================
           COMETS
           ====================================================== */

        .wm-comet {
          pointer-events: none;
        }

        .wm-comet-glow {
          fill: #E8D08F;
          opacity: .24;
          filter: blur(5px);
        }

        .wm-comet-body {
          fill: #E8D08F;
          opacity: .96;

          filter:
            drop-shadow(
              0 0 8px
              rgba(232, 208, 143, .95)
            );
        }

        .wm-comet-core {
          fill: #FFFDF5;
          opacity: 1;

          filter:
            drop-shadow(
              0 0 5px
              rgba(255, 253, 245, 1)
            );
        }

        .wm-route.route-active
        .wm-comet-body {
          opacity: 1;

          filter:
            drop-shadow(
              0 0 10px
              rgba(232, 208, 143, 1)
            );
        }

        .wm-route.route-dim
        .wm-comet {
          opacity: .9;
        }

        /* ======================================================
           ORIGIN CITIES
           ====================================================== */

        .wm-origin {
          cursor: pointer;
          outline: none;
        }

        .wm-origin-core {
          fill: #C99A3C;

          transition:
            fill .2s ease;
        }

        .wm-origin-pulse {
          fill: #E4C883;
          opacity: .7;

          transform-box: fill-box;
          transform-origin: center;

          animation:
            wmOriginPulse
            3.2s
            ease-in-out
            infinite;
        }

        .wm-origin-hit {
          fill: transparent;
        }

        .wm-origin.origin-active
        .wm-origin-core {
          fill: #FFF6DF;
        }

        @keyframes wmOriginPulse {
          0% {
            opacity: .85;
            transform: scale(.7);
          }

          50% {
            opacity: .15;
            transform: scale(2.2);
          }

          100% {
            opacity: .85;
            transform: scale(.7);
          }
        }

        /* ======================================================
           CITY LABEL
           ====================================================== */

        .wm-city-label {
          pointer-events: none;
          opacity: 0;

          transition:
            opacity .22s ease;
        }

        .wm-city-label.visible {
          opacity: 1;
        }

        .wm-city-line {
          stroke: #E4C883;
          stroke-width: 1.2;
          opacity: .6;
        }

        .wm-city-label-bg {
          fill: rgba(8, 10, 13, .96);

          stroke:
            rgba(228, 200, 131, .7);

          stroke-width: .8;
        }

        .wm-city-label-name {
          fill: #FFF6DF;
          font-size: 13px;
          font-weight: 800;
          text-anchor: middle;
        }

        .wm-city-label-tag {
          fill: rgba(255, 246, 223, .65);
          font-size: 8px;
          text-anchor: middle;
        }

        /* ======================================================
           INDIA
           ====================================================== */

        .wm-india-core {
          fill: #FFF6DF;

          filter:
            drop-shadow(
              0 0 8px
              rgba(228, 200, 131, 1)
            );
        }

        .wm-india-gold {
          fill: #C99A3C;
        }

        .wm-india-ring {
          fill: none;
          stroke: #E4C883;
          stroke-width: 1.2;
          opacity: .8;

          transform-box: fill-box;
          transform-origin: center;

          animation:
            wmIndiaRing
            3.4s
            ease-out
            infinite;
        }

        .wm-india-ring.r2 {
          animation-delay: 1.15s;
        }

        .wm-india-ring.r3 {
          animation-delay: 2.3s;
        }

        @keyframes wmIndiaRing {
          0% {
            r: 7px;
            opacity: .85;
          }

          100% {
            r: 65px;
            opacity: 0;
          }
        }

        .wm-india-label {
          fill: #E4C883;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 14px;
          font-weight: 800;
          letter-spacing: 4px;
          pointer-events: none;
        }

        /* ======================================================
           COUNTRY TOOLTIP
           ====================================================== */

        .wm-country-tooltip {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 50;

          pointer-events: none;

          padding: 9px 14px;

          border:
            1px solid
            rgba(228, 200, 131, .6);

          border-radius: 7px;

          background:
            rgba(8, 10, 13, .95);

          color: #FFF6DF;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          white-space: nowrap;

          box-shadow:
            0 8px 28px
            rgba(0, 0, 0, .35);

          opacity: 0;

          transform:
            translate(-50%, -100%)
            translateY(-14px);

          transition:
            opacity .16s ease;
        }

        .wm-country-tooltip.visible {
          opacity: 1;
        }

        .wm-tooltip-sub {
          display: block;
          margin-top: 4px;

          color:
            rgba(228, 200, 131, .72);

          font-size: 8px;
          letter-spacing: 1px;
        }

        /* ======================================================
           LOADING
           ====================================================== */

        .wm-loading {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          color:
            rgba(228, 200, 131, .65);

          font-family:
            Arial,
            sans-serif;

          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .wm-error {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          color:
            rgba(255, 255, 255, .5);

          font-family:
            Arial,
            sans-serif;

          font-size: 11px;
        }

        /* ======================================================
           MOBILE
           ====================================================== */

        /* ======================================================
   MOBILE MAP COMPACT HEIGHT
   ====================================================== */

@media (max-width: 900px) {

  #worldMap {
    width: 100%;
    height: 210px;
    min-height: 210px;
    max-height: 210px;
    overflow: hidden;
  }

  #worldMap svg {
    width: 100%;
    height: 210px;
    transform: translateY(-12px);
  }

  .wm-city-label-name {
    font-size: 11px;
  }

  .wm-city-label-tag {
    font-size: 7px;
  }

  .wm-india-label {
    font-size: 11px;
    letter-spacing: 3px;
  }
}


/* ======================================================
   SMALL MOBILE
   ====================================================== */

@media (max-width: 700px) {

  #worldMap {
    width: 100%;
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;
  }

  #worldMap svg {
    width: 100%;
    height: 200px;
    transform: translateY(-8px);
  }

  .wm-country-tooltip {
    font-size: 10px;
    padding: 7px 10px;
  }

  .wm-tooltip-sub {
    font-size: 7px;
  }

  .wm-comet-glow {
    opacity: .22;
  }

  .wm-city-label {
    display: none;
  }
}
      </style>

      <!-- =====================================================
           COUNTRY TOOLTIP
           ===================================================== -->

      <div
        class="wm-country-tooltip"
        id="wmCountryTooltip"
      >
        <span id="wmCountryName"></span>

        <span class="wm-tooltip-sub">
          GLOBAL ALUMNI NETWORK
        </span>
      </div>

      <!-- =====================================================
           SVG
           ===================================================== -->

      <svg
        id="wmSvg"
        viewBox="0 0 ${MAP_WIDTH} ${MAP_HEIGHT}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Interactive dotted world map showing global alumni connections to India"
      >

        <defs>

          <!-- =================================================
               MAP CLIP
               ================================================= -->

          <clipPath id="wmMapClip">
            <rect
              x="${DOT_EDGE_MARGIN}"
              y="${DOT_EDGE_MARGIN}"
              width="${
                MAP_WIDTH -
                DOT_EDGE_MARGIN * 2
              }"
              height="${
                MAP_HEIGHT -
                DOT_EDGE_MARGIN * 2
              }"
            />
          </clipPath>

          <!-- =================================================
               INDIA GLOW
               ================================================= -->

          <radialGradient
            id="wmIndiaGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >

            <stop
              offset="0%"
              stop-color="#FFF6DF"
              stop-opacity="1"
            />

            <stop
              offset="25%"
              stop-color="#E4C883"
              stop-opacity=".9"
            />

            <stop
              offset="55%"
              stop-color="#C99A3C"
              stop-opacity=".42"
            />

            <stop
              offset="100%"
              stop-color="#C99A3C"
              stop-opacity="0"
            />

          </radialGradient>

          <!-- =================================================
               GLOW
               ================================================= -->

          <filter
            id="wmGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >

            <feGaussianBlur
              stdDeviation="2"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>

          </filter>

        </defs>

        <!-- ===================================================
             WORLD DOTS
             =================================================== -->

        <g
          id="wmDots"
          class="wm-dots"
          clip-path="url(#wmMapClip)"
        >
          ${dotsHTML}
        </g>

        <!-- ===================================================
             ROUTES
             =================================================== -->

        <g
          id="wmRoutes"
          class="wm-routes"
          clip-path="url(#wmMapClip)"
        >
          ${routesHTML}
        </g>

        <!-- ===================================================
             COUNTRY INTERACTION
             =================================================== -->

        <g
          id="wmCountries"
          class="wm-countries"
        >
          ${countriesHTML}
        </g>

        <!-- ===================================================
             ORIGINS
             =================================================== -->

        <g
          id="wmOrigins"
          class="wm-origins"
        >
          ${originsHTML}
        </g>

        <!-- ===================================================
             INDIA BEACON
             =================================================== -->

        <g
          class="wm-india"
          filter="url(#wmGlow)"
          clip-path="url(#wmMapClip)"
        >

          <circle
            class="wm-india-ring r1"
            cx="${indiaX}"
            cy="${indiaY}"
            r="7"
          />

          <circle
            class="wm-india-ring r2"
            cx="${indiaX}"
            cy="${indiaY}"
            r="7"
          />

          <circle
            class="wm-india-ring r3"
            cx="${indiaX}"
            cy="${indiaY}"
            r="7"
          />

          <circle
            cx="${indiaX}"
            cy="${indiaY}"
            r="42"
            fill="url(#wmIndiaGradient)"
            opacity=".7"
          />

          <circle
            cx="${indiaX}"
            cy="${indiaY}"
            r="14"
            fill="url(#wmIndiaGradient)"
          />

          <circle
            class="wm-india-core"
            cx="${indiaX}"
            cy="${indiaY}"
            r="5"
          />

          <circle
            class="wm-india-gold"
            cx="${indiaX}"
            cy="${indiaY}"
            r="2.2"
          />

          <text
            class="wm-india-label"
            x="${indiaX}"
            y="${indiaY + 48}"
            text-anchor="middle"
          >
            INDIA
          </text>

        </g>

      </svg>
    `;

    /* ==========================================================
       REFERENCES
       ========================================================== */

    const svg =
      container.querySelector(
        "#wmSvg"
      );

    const tooltip =
      container.querySelector(
        "#wmCountryTooltip"
      );

    const tooltipName =
      container.querySelector(
        "#wmCountryName"
      );

    if (!svg) {
      return;
    }

    const countryHits =
      svg.querySelectorAll(
        ".wm-country-hit"
      );

    const allDots =
      svg.querySelectorAll(
        ".wm-dot"
      );

    const allRoutes =
      svg.querySelectorAll(
        ".wm-route"
      );

    const originGroups =
      svg.querySelectorAll(
        ".wm-origin"
      );

    const cityLabels =
      svg.querySelectorAll(
        ".wm-city-label"
      );

    /* ==========================================================
       COUNTRY HOVER
       ========================================================== */

    let activeCountry = null;

    function activateCountry(
      countryIndex,
      event
    ) {
      activeCountry =
        String(countryIndex);

      allDots.forEach(dot => {
        const belongs =
          dot.dataset.country ===
          activeCountry;

        dot.classList.toggle(
          "country-active",
          belongs
        );
      });

      const feature =
        features[
          Number(countryIndex)
        ];

      const name =
        getCountryName(
          feature
        );

      if (
        tooltip &&
        tooltipName
      ) {
        tooltipName.textContent =
          name;

        tooltip.classList.add(
          "visible"
        );

        moveTooltip(event);
      }
    }

    /* ==========================================================
       CLEAR COUNTRY
       ========================================================== */

    function clearCountry() {
      activeCountry = null;

      allDots.forEach(dot => {
        dot.classList.remove(
          "country-active"
        );
      });

      if (tooltip) {
        tooltip.classList.remove(
          "visible"
        );
      }
    }

    /* ==========================================================
       TOOLTIP POSITION
       ========================================================== */

    function moveTooltip(event) {
      if (
        !tooltip ||
        !event
      ) {
        return;
      }

      const rect =
        container.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      tooltip.style.left =
        `${x}px`;

      tooltip.style.top =
        `${y}px`;
    }

    /* ==========================================================
       COUNTRY EVENTS
       ========================================================== */

    countryHits.forEach(
      country => {
        country.addEventListener(
          "mouseenter",
          event => {
            activateCountry(
              country.dataset.country,
              event
            );
          }
        );

        country.addEventListener(
          "mousemove",
          moveTooltip
        );

        country.addEventListener(
          "mouseleave",
          clearCountry
        );

        country.addEventListener(
          "focus",
          () => {
            const rect =
              country.getBoundingClientRect();

            activateCountry(
              country.dataset.country,
              {
                clientX:
                  rect.left +
                  rect.width / 2,

                clientY:
                  rect.top +
                  rect.height / 2
              }
            );
          }
        );

        country.addEventListener(
          "blur",
          clearCountry
        );

        country.addEventListener(
          "touchstart",
          event => {
            event.preventDefault();

            activateCountry(
              country.dataset.country,
              event.touches[0]
            );

            clearTimeout(
              country.__touchTimer
            );

            country.__touchTimer =
              setTimeout(
                clearCountry,
                2500
              );
          },
          {
            passive: false
          }
        );
      }
    );

    /* ==========================================================
       CITY INTERACTION
       ========================================================== */

    originGroups.forEach(
      (
        origin,
        index
      ) => {
        const route =
          svg.querySelector(
            `.wm-route[data-origin="${index}"]`
          );

        const label =
          svg.querySelector(
            `.wm-city-label[data-city-label="${index}"]`
          );

        function activateOrigin() {
          origin.classList.add(
            "origin-active"
          );

          if (label) {
            label.classList.add(
              "visible"
            );
          }

          if (route) {
            route.classList.add(
              "route-active"
            );
          }

          allRoutes.forEach(
            other => {
              if (
                other !== route
              ) {
                other.classList.add(
                  "route-dim"
                );
              }
            }
          );
        }

        function clearOrigin() {
          origin.classList.remove(
            "origin-active"
          );

          if (label) {
            label.classList.remove(
              "visible"
            );
          }

          if (route) {
            route.classList.remove(
              "route-active"
            );
          }

          allRoutes.forEach(
            other => {
              other.classList.remove(
                "route-dim"
              );
            }
          );
        }

        origin.addEventListener(
          "mouseenter",
          activateOrigin
        );

        origin.addEventListener(
          "mouseleave",
          clearOrigin
        );

        origin.addEventListener(
          "focus",
          activateOrigin
        );

        origin.addEventListener(
          "blur",
          clearOrigin
        );

        origin.addEventListener(
          "touchstart",
          event => {
            event.preventDefault();

            activateOrigin();

            clearTimeout(
              origin.__touchTimer
            );

            origin.__touchTimer =
              setTimeout(
                clearOrigin,
                2500
              );
          },
          {
            passive: false
          }
        );
      }
    );

    /* ==========================================================
       ROOT MOUSE LEAVE
       ========================================================== */

    container.addEventListener(
      "mouseleave",
      () => {
        clearCountry();

        originGroups.forEach(
          origin => {
            origin.classList.remove(
              "origin-active"
            );
          }
        );

        cityLabels.forEach(
          label => {
            label.classList.remove(
              "visible"
            );
          }
        );

        allRoutes.forEach(
          route => {
            route.classList.remove(
              "route-active"
            );

            route.classList.remove(
              "route-dim"
            );
          }
        );
      }
    );

    /* ==========================================================
       ACCESSIBILITY
       ========================================================== */

    svg.setAttribute(
      "viewBox",
      `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`
    );

    svg.setAttribute(
      "preserveAspectRatio",
      "xMidYMid meet"
    );

    svg.setAttribute(
      "role",
      "img"
    );

    svg.setAttribute(
      "aria-label",
      "Interactive dotted world map showing global alumni connections to India"
    );

    /* ==========================================================
       READY
       ========================================================== */

    container.classList.add(
      "world-map-ready"
    );
  }

  /* ============================================================
     START
     ============================================================ */

  function start() {
    initHeroMap();
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      start,
      {
        once: true
      }
    );
  } else {
    start();
  }

})();
