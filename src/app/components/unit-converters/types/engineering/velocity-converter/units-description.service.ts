import { Injectable } from '@angular/core';

@Injectable()
export class UnitsInfoService {
  private conversionDescriptions: any = {
    "meter-per-second": "<section id=\"meter-per-second\" aria-label=\"Meter per Second Speed Unit Description\">\n    <h3>Meter per Second</h3>\n\n    <p>Meter per second (m/s) is a standard unit of speed in the International System of Units (SI). It represents the distance of one meter traveled in one second. This unit is widely used in scientific and engineering applications to measure speed and velocity.</p>\n\n    <p>Conversion: <strong>1 Meter per Second (m/s) = 0.277778 Kilometers per Hour (km/h) = 0.44704 Miles per Hour (mph) = 3.28084 Feet per Second (ft/s) = 1.94384 Knots (kn)</strong></p>\n\n    <p>Meter per second is commonly used in physics, fluid dynamics, and sports to calculate the rate of motion and change in position.</p>\n</section>",
    "kilometer-per-hour": "<section id=\"kilometer-per-hour\" aria-label=\"Kilometer per Hour Speed Unit Description\">\n    <h3>Kilometer per Hour</h3>\n\n    <p>Kilometer per hour (km/h) is a metric unit of speed that represents the distance of one kilometer traveled in one hour. It's a standard unit for measuring vehicle speed in most countries that use the metric system.</p>\n\n    <p>Conversion: <strong>1 Kilometer per Hour (km/h) = 3.6 Kilometers per Second (m/s) = 0.621371 Miles per Hour (mph) = 3.28084 Feet per Second (ft/s) = 1.94384 Knots (kn)</strong></p>\n\n    <p>Kilometers per hour is commonly used for speed limits, vehicle speedometers, and determining the pace of travel.</p>\n</section>",
    "mile-per-hour": "<section id=\"mile-per-hour\" aria-label=\"Mile per Hour Speed Unit Description\">\n    <h3>Mile per Hour</h3>\n\n    <p>Mile per hour (mph) is an imperial unit of speed that represents the distance of one mile traveled in one hour. It's widely used in the United States and some other countries that follow the imperial system for measuring vehicle speed.</p>\n\n    <p>Conversion: <strong>1 Mile per Hour (mph) = 1.60934 Kilometers per Hour (km/h) = 0.277778 Meters per Second (m/s) = 1.46667 Feet per Second (ft/s) = 0.868976 Knots (kn)</strong></p>\n\n    <p>Miles per hour is the standard unit for road speed limits and is often seen on car speedometers in countries that use the imperial system.</p>\n</section>",
    "foot-per-second": "<section id=\"foot-per-second\" aria-label=\"Foot per Second Speed Unit Description\">\n    <h3>Foot per Second</h3>\n\n    <p>Foot per second (ft/s) is an imperial unit of speed that represents the distance of one foot traveled in one second. It's commonly used in various engineering and physics applications in the United States and other countries following the imperial system.</p>\n\n    <p>Conversion: <strong>1 Foot per Second (ft/s) = 0.3048 Meters per Second (m/s) = 1.09728 Kilometers per Hour (km/h) = 0.681818 Miles per Hour (mph) = 0.592484 Knots (kn)</strong></p>\n\n    <p>Foot per second is often utilized in fluid dynamics, acoustics, and mechanics to measure speed and velocity.</p>\n</section>",
    "knot": "<section id=\"knot\" aria-label=\"Knot Speed Unit Description\">\n    <h3>Knot</h3>\n\n    <p>A knot (kn) is a unit of speed primarily used in maritime and aviation contexts. It represents one nautical mile per hour, which is a standard for measuring the speed of ships and aircraft traveling over water or through the air.</p>\n\n    <p>Conversion: <strong>1 Knot (kn) = 1.852 Kilometers per Hour (km/h) = 0.514444 Meters per Second (m/s) = 1.15078 Miles per Hour (mph) = 1.68781 Feet per Second (ft/s)</strong></p>\n\n    <p>Knots are crucial for navigation, weather forecasting, and flight planning in the transportation industry.</p>\n</section>",
    "mach": "<section id=\"mach\" aria-label=\"Mach Speed Unit Description\">\n    <h3>Mach</h3>\n\n    <p>Mach (Ma) is a unit of speed that represents an object's speed relative to the speed of sound in the surrounding medium. It's commonly used in aviation and aerospace to denote the ratio of an aircraft's speed to the speed of sound.</p>\n\n    <p>Conversion: <strong>1 Mach (Ma) = 343.058 Meters per Second (m/s) = 1235.07 Kilometers per Hour (km/h) = 767.269 Miles per Hour (mph) = 1125.33 Feet per Second (ft/s)</strong></p>\n\n    <p>Mach numbers are crucial for assessing the performance and behavior of aircraft at high speeds.</p>\n</section>",
    "light-per-second": "<section id=\"light-per-second\" aria-label=\"Speed of Light (c) Speed Unit Description\">\n    <h3>Speed of Light (c)</h3>\n\n    <p>The speed of light (c) is an absolute constant in physics, representing the maximum speed at which information or matter can travel in a vacuum. It plays a fundamental role in the theory of relativity and various scientific applications.</p>\n\n    <p>Conversion: <strong>1 Speed of Light (c) = 299,792,458 Meters per Second (m/s) = 1,079,252,848.8 Kilometers per Hour (km/h) = 670,616,629.4 Miles per Hour (mph) = 983,571,056.4 Feet per Second (ft/s)</strong></p>\n\n    <p>The speed of light is a fundamental constant in physics and is critical for understanding the behavior of electromagnetic waves and the principles of relativity.</p>\n</section>",
    "kilometer-per-second": "<section id=\"kilometer-per-second\" aria-label=\"Kilometer per Second Speed Unit Description\">\n    <h3>Kilometer per Second</h3>\n\n    <p>Kilometer per second (km/s) is a metric unit of speed that represents the distance of one kilometer traveled in one second. It's often used in scientific and engineering contexts for precise speed measurements.</p>\n\n    <p>Conversion: <strong>1 Kilometer per Second (km/s) = 1,000 Meters per Second (m/s) = 3,600 Kilometers per Hour (km/h) = 2,236.94 Miles per Hour (mph) = 3,280.84 Feet per Second (ft/s)</strong></p>\n\n    <p>Kilometers per second is a convenient unit for describing high-speed phenomena in physics and engineering.</p>\n</section>",
    "centimeter-per-second": "<section id=\"centimeter-per-second\" aria-label=\"Centimeter per Second Speed Unit Description\">\n    <h3>Centimeter per Second</h3>\n\n    <p>Centimeter per second (cm/s) is a metric unit of speed that represents the distance of one centimeter traveled in one second. It's often used for precise measurements of slow or small-scale motion in scientific and engineering applications.</p>\n\n    <p>Conversion: <strong>1 Centimeter per Second (cm/s) = 0.01 Meters per Second (m/s) = 0.036 Kilometers per Hour (km/h) = 0.0224 Miles per Hour (mph) = 0.0328 Feet per Second (ft/s)</strong></p>\n\n    <p>Centimeters per second is ideal for measuring minute changes in position and velocity.</p>\n</section>",
    "millimeter-per-second": "<section id=\"millimeter-per-second\" aria-label=\"Millimeter per Second Speed Unit Description\">\n    <h3>Millimeter per Second</h3>\n\n    <p>Millimeter per second (mm/s) is a metric unit of speed that represents the distance of one millimeter traveled in one second. It's used for extremely precise measurements of slow or small-scale motion in scientific and engineering contexts.</p>\n\n    <p>Conversion: <strong>1 Millimeter per Second (mm/s) = 0.001 Meters per Second (m/s) = 0.0036 Kilometers per Hour (km/h) = 0.0022 Miles per Hour (mph) = 0.0033 Feet per Second (ft/s)</strong></p>\n\n    <p>Millimeters per second is the preferred unit for measuring ultra-precise movements and changes in position.</p>\n</section>",
    "yard-per-second": "<section id=\"yard-per-second\" aria-label=\"Yard per Second Speed Unit Description\">\n    <h3>Yard per Second</h3>\n\n    <p>Yard per second (yd/s) is a unit of speed that represents the distance of one yard traveled in one second. It's used in various applications, including sports and engineering, where yards are a common unit of measurement.</p>\n\n    <p>Conversion: <strong>1 Yard per Second (yd/s) = 0.9144 Meters per Second (m/s) = 1.09728 Kilometers per Hour (km/h) = 0.681818 Miles per Hour (mph) = 3 Feet per Second (ft/s)</strong></p>\n\n    <p>Yards per second are frequently used in sports such as American football to describe the speed of players or objects on the field.</p>\n</section>",
    "mile-per-second": "<section id=\"mile-per-second\" aria-label=\"Mile per Second Speed Unit Description\">\n    <h3>Mile per Second</h3>\n\n    <p>Mile per second (mi/s) is a unit of speed that represents the distance of one mile traveled in one second. It's used for describing high-speed motion in various scientific and engineering contexts.</p>\n\n    <p>Conversion: <strong>1 Mile per Second (mi/s) = 1609.34 Meters per Second (m/s) = 5793.64 Kilometers per Hour (km/h) = 3600 Miles per Hour (mph) = 5280 Feet per Second (ft/s)</strong></p>\n\n    <p>Miles per second is a unit that finds application in situations involving extremely rapid motion, such as in particle physics or astrophysics.</p>\n</section>",
    "inch-per-second": "<section id=\"inch-per-second\" aria-label=\"Inch per Second Speed Unit Description\">\n    <h3>Inch per Second</h3>\n\n    <p>Inch per second (in/s) is a unit of speed that represents the distance of one inch traveled in one second. It's often used for precise measurements of small-scale motion in engineering and manufacturing.</p>\n\n    <p>Conversion: <strong>1 Inch per Second (in/s) = 0.0254 Meters per Second (m/s) = 0.09144 Kilometers per Hour (km/h) = 0.05682 Miles per Hour (mph) = 0.08333 Feet per Second (ft/s)</strong></p>\n\n    <p>Inches per second is ideal for quantifying the speed of moving mechanical components in machinery.</p>\n</section>",
    "microinch-per-second": "<section id=\"microinch-per-second\" aria-label=\"Microinch per Second Speed Unit Description\">\n    <h3>Microinch per Second</h3>\n\n    <p>Microinch per second (µin/s) is an extremely small unit of speed that represents the distance of one microinch traveled in one second. It's used for ultra-precise measurements of minuscule movements in scientific and engineering applications.</p>\n\n    <p>Conversion: <strong>1 Microinch per Second (µin/s) = 2.54e-08 Meters per Second (m/s) = 9.144e-08 Kilometers per Hour (km/h) = 5.682e-08 Miles per Hour (mph) = 8.333e-08 Feet per Second (ft/s)</strong></p>\n\n    <p>Microinches per second is essential for measuring microscopic movements and vibrations in specialized equipment and research.</p>\n</section>",
    "millimeter-per-hour": "<section id=\"millimeter-per-hour\" aria-label=\"Millimeter per Hour Speed Unit Description\">\n    <h3>Millimeter per Hour</h3>\n\n    <p>Millimeter per hour (mm/h) is a unit of speed that represents the distance of one millimeter traveled in one hour. It's used for measuring very slow or gradual changes in position over extended periods.</p>\n\n    <p>Conversion: <strong>1 Millimeter per Hour (mm/h) = 2.77778e-07 Meters per Second (m/s) = 0.001 Kilometers per Hour (km/h) = 0.000621371 Miles per Hour (mph) = 0.00091144 Feet per Second (ft/s)</strong></p>\n\n    <p>Millimeters per hour is suitable for quantifying the rate of slow processes, such as sedimentation or material deposition.</p>\n</section>",
    "centimeter-per-hour": "<section id=\"centimeter-per-hour\" aria-label=\"Centimeter per Hour Speed Unit Description\">\n    <h3>Centimeter per Hour</h3>\n\n    <p>Centimeter per hour (cm/h) is a unit of speed that represents the distance of one centimeter traveled in one hour. It's used for measuring very slow and gradual changes or motion over extended periods of time.</p>\n\n    <p>Conversion: <strong>1 Centimeter per Hour (cm/h) = 2.77778e-06 Meters per Second (m/s) = 0.00001 Kilometers per Hour (km/h) = 0.0000062137 Miles per Hour (mph) = 0.0000091144 Feet per Second (ft/s)</strong></p>\n\n    <p>Centimeters per hour is a useful unit for quantifying slow processes such as sedimentation, or for measuring extremely gradual movements.</p>\n</section>",
    "kilometer-per-millisecond": "<section id=\"kilometer-per-millisecond\" aria-label=\"Kilometer per Millisecond Speed Unit Description\">\n    <h3>Kilometer per Millisecond</h3>\n\n    <p>Kilometer per millisecond (km/ms) is a unit of speed that represents the distance of one kilometer traveled in one millisecond. It's used for describing extremely high-speed motion in scientific and technical contexts, such as in physics experiments or advanced engineering.</p>\n\n    <p>Conversion: <strong>1 Kilometer per Millisecond (km/ms) = 1000000 Meters per Second (m/s) = 3600000 Kilometers per Hour (km/h) = 2236936.4 Miles per Hour (mph) = 3280840.84 Feet per Second (ft/s)</strong></p>\n\n    <p>Kilometers per millisecond is an essential unit for measuring rapid events and high-speed phenomena with precision.</p>\n</section>",
    "meter-per-millisecond": "<section id=\"meter-per-millisecond\" aria-label=\"Meter per Millisecond Speed Unit Description\">\n    <h3>Meter per Millisecond</h3>\n\n    <p>Meter per millisecond (m/ms) is a unit of speed that represents the distance of one meter traveled in one millisecond. It's frequently used in scientific and engineering applications to quantify rapid motion or change over short time intervals.</p>\n\n    <p>Conversion: <strong>1 Meter per Millisecond (m/ms) = 1000 Meters per Second (m/s) = 3600000 Kilometers per Hour (km/h) = 2236936.4 Miles per Hour (mph) = 3280840.84 Feet per Second (ft/s)</strong></p>\n\n    <p>Meters per millisecond is a valuable unit for precise measurements of fast-moving objects or events.</p>\n</section>",
    "foot-per-millisecond": "<section id=\"foot-per-millisecond\" aria-label=\"Foot per Millisecond Speed Unit Description\">\n    <h3>Foot per Millisecond</h3>\n\n    <p>Foot per millisecond (ft/ms) is a unit of speed that represents the distance of one foot traveled in one millisecond. It's used in scientific and technical applications to quantify rapid motion or change on a very small timescale.</p>\n\n    <p>Conversion: <strong>1 Foot per Millisecond (ft/ms) = 0.3048 Meters per Second (m/s) = 1.09728 Kilometers per Hour (km/h) = 0.681818 Miles per Hour (mph) = 3 Feet per Second (ft/s)</strong></p>\n\n    <p>Feet per millisecond is essential for measuring quick movements, especially in areas like robotics or high-speed testing.</p>\n</section>",
    "inch-per-millisecond": "<section id=\"inch-per-millisecond\" aria-label=\"Inch per Millisecond Speed Unit Description\">\n    <h3>Inch per Millisecond</h3>\n\n    <p>Inch per millisecond (in/ms) is a unit of speed that represents the distance of one inch traveled in one millisecond. It's employed in precise measurements of small-scale rapid movements in scientific and engineering applications.</p>\n\n    <p>Conversion: <strong>1 Inch per Millisecond (in/ms) = 0.0254 Meters per Second (m/s) = 0.09144 Kilometers per Hour (km/h) = 0.05682 Miles per Hour (mph) = 0.08333 Feet per Second (ft/s)</strong></p>\n\n    <p>Inches per millisecond is a valuable unit for quantifying extremely rapid and precise motion, such as in nanotechnology or advanced robotics.</p>\n</section>"
}

  getDescription(unitName: string) {
    return this.conversionDescriptions[unitName];
  }


}