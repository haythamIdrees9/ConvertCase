import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: "kilometer", label: "kilometer [km]", conversionRate: 1000},
    { key: "meter", label: "meter [m]", conversionRate: 1},
    { key: "centimeter", label: "centimeter [cm]", conversionRate: 0.01},
    { key: "millimeter", label: "millimeter [mm]", conversionRate: 0.001},
    { key: "micrometer", label: "micrometer [µm]", conversionRate: 0.000001},
    { key: "nanometer", label: "nanometer [nm]", conversionRate: 1e-9},
    { key: "mile", label: "mile [mi]", conversionRate: 1609.344},
    { key: "yard", label: "yard [yd]", conversionRate: 0.9144},
    { key: "foot", label: "foot [ft]", conversionRate: 0.3048},
    { key: "inch", label: "inch [in]", conversionRate: 0.0254},
    { key: "kiloparsec", label: "kiloparsec [kpc]", conversionRate: 30860000000000000000},
    { key: "light-year", label: "light year [ly]", conversionRate: 9460730472580800},
    { key: "exameter", label: "exameter [Em]", conversionRate: 1000000000000000000},
    { key: "petameter", label: "petameter [Pm]", conversionRate: 1000000000000000},
    { key: "terameter", label: "terameter [Tm]", conversionRate: 1000000000000},
    { key: "gigameter", label: "gigameter [Gm]", conversionRate: 1000000000},
    { key: "megameter", label: "megameter [Mm]", conversionRate: 1000000},
    { key: "hectometer", label: "hectometer [hm]", conversionRate: 100},
    { key: "dekameter", label: "dekameter [dam]", conversionRate: 10},
    { key: "decimeter", label: "decimeter [dm]", conversionRate: 0.1},
    { key: "micron", label: "micron [µ]", conversionRate: 0.000001},
    { key: "picometer", label: "picometer [pm]", conversionRate: 1e-12},
    { key: "femtometer", label: "femtometer [fm]", conversionRate: 1e-15},
    { key: "attometer", label: "attometer [am]", conversionRate: 1e-18},
    { key: "parsec", label: "parsec [pc]", conversionRate: 30860000000000000},
    { key: "astronomical-unit", label: "astronomical unit [AU]", conversionRate: 149600000000},
    { key: "league", label: "league [lea]", conversionRate: 4828.032},
    { key: "nautical-league-UK", label: "nautical league (UK)", conversionRate: 5559.552},
    { key: "nautical-league-int", label: "nautical league (int.)", conversionRate: 5556},
    { key: "league-statute", label: "league (statute)", conversionRate: 4828.041},
    { key: "nautical-mile-UK", label: "nautical mile (UK)", conversionRate: 1853},
    { key: "nautical-mile-international", label: "nautical mile (international)", conversionRate: 1852},
    { key: "mile-statute", label: "mile (statute)", conversionRate: 1609.3432},
    { key: "mile-US-survey", label: "mile (US survey)", conversionRate: 1609.347},
    { key: "mile-Roman", label: "mile (Roman)", conversionRate: 1479.804},
    { key: "kiloyard", label: "kiloyard [kyd]", conversionRate: 914.4},
    { key: "furlong", label: "furlong [fur]", conversionRate: 201.168},
    { key: "furlong-US-survey", label: "furlong (US survey)", conversionRate: 201.168},
    { key: "chain", label: "chain [ch]", conversionRate: 20.1168},
    { key: "chain-US-survey", label: "chain (US survey)", conversionRate: 20.11684},
    { key: "rod", label: "rod [rd]", conversionRate: 5.0292},
    { key: "rod-US-survey", label: "rod (US survey)", conversionRate: 5.02921},
    { key: "perch", label: "perch", conversionRate: 5.0292},
    { key: "pole", label: "pole", conversionRate: 5.0292},
    { key: "fathom", label: "fathom [fath]", conversionRate: 1.8288},
    { key: "fathom-US-survey", label: "fathom (US survey)", conversionRate: 1.828803},
    { key: "ell", label: "ell", conversionRate: 1.143},
    { key: "foot-US-survey", label: "foot (US survey)", conversionRate: 0.3048006},
    { key: "link", label: "link [li]", conversionRate: 0.201168},
    { key: "link-US-survey", label: "link (US survey)", conversionRate: 0.2011676},
    { key: "cubit-UK", label: "cubit (UK)", conversionRate: 0.4572},
    { key: "handspan-cloth", label: "handspan (cloth)", conversionRate: 0.2286},
    { key: "finger-cloth", label: "finger (cloth)", conversionRate: 0.1143},
    { key: "nail-cloth", label: "nail (cloth)", conversionRate: 0.05715},
    { key: "inch-US-survey", label: "inch (US survey)", conversionRate: 0.0254000508},
    { key: "mil", label: "mil", conversionRate: 0.0000254},
    { key: "microinch", label: "microinch", conversionRate: 2.54e-8},
    { key: "angstrom", label: "angstrom", conversionRate: 1e-10},
    { key: "a.u.-length", label: "a.u. of length", conversionRate: 149600000000},
    { key: "X-unit", label: "X-unit", conversionRate: 1.0020722e-13},
    { key: "fermi", label: "fermi", conversionRate: 1e-15},
    { key: "arpent", label: "arpent", conversionRate: 58.471308},
    { key: "pica", label: "pica", conversionRate: 0.0042333333},
    { key: "twip", label: "twip", conversionRate: 0.0000176389},
    { key: "aln", label: "aln", conversionRate: 0.59377},
    { key: "famn", label: "famn", conversionRate: 1.7813},
    { key: "caliber", label: "caliber", conversionRate: 0.000254},
    { key: "centiinch", label: "centiinch", conversionRate: 0.000254},
    { key: "ken", label: "ken", conversionRate: 2.11836},
    { key: "Russian-archin", label: "Russian archin", conversionRate: 0.7112},
    { key: "Roman-actus", label: "Roman actus", conversionRate: 35.47872},
    { key: "vara-de-tarea", label: "vara de tarea", conversionRate: 0.8359},
    { key: "vara-conuqueña", label: "vara conuqueña", conversionRate: 0.8467},
    { key: "vara-castellana", label: "vara castellana", conversionRate: 0.835905},
    { key: "cubit-Greek", label: "cubit (Greek)", conversionRate: 0.462},
    { key: "long-reed", label: "long reed", conversionRate: 3.929},
    { key: "reed", label: "reed", conversionRate: 2.7432},
    { key: "long-cubit", label: "long cubit", conversionRate: 0.5334},
    { key: "handbreadth", label: "handbreadth", conversionRate: 0.1016},
    { key: "fingerbreadth", label: "fingerbreadth", conversionRate: 0.022225},
    { key: "Planck-length", label: "Planck length", conversionRate: 1.616255e-35},
    { key: "Electron-radius-classical", label: "Electron radius (classical)", conversionRate: 2.8179e-15},
    { key: "Bohr-radius", label: "Bohr radius", conversionRate: 5.29177210903e-11},
    { key: "Moon-radius", label: "Moon Equatorial and Polar Radii", conversionRate: 1738140},
    { key: "Earths-equatorial-radius", label: "Earth's equatorial radius", conversionRate: 6378137},
    { key: "Earths-polar-radius", label: "Earth's polar radius", conversionRate: 6356752},
    { key: "Earths-distance-from-sun", label: "Earth's distance from sun", conversionRate: 149597870000},
    { key: "Mars-radius", label: "Mars Equatorial and Polar Radii", conversionRate: 3396000},
    { key: "Suns-radius", label: "Sun's radius", conversionRate: 696340000
    }
]);

  popularUnits = Object.freeze([
 { route: "kilometer-to-meter", reverseRoute: "meter-to-kilometer", labelRoute: "Kilometer to Meter", labelReverseRoute: "Meter to Kilometer"   },
 { route: "meter-to-centimeter", reverseRoute: "centimeter-to-meter", labelRoute: "Meter to Centimeter", labelReverseRoute: "Centimeter to Meter"   },
 { route: "centimeter-to-millimeter", reverseRoute: "millimeter-to-centimeter", labelRoute: "Centimeter to Millimeter", labelReverseRoute: "Millimeter to Centimeter"   },
 { route: "millimeter-to-micrometer", reverseRoute: "micrometer-to-millimeter", labelRoute: "Millimeter to Micrometer", labelReverseRoute: "Micrometer to Millimeter"   },
 { route: "inch-to-centimeter", reverseRoute: "centimeter-to-inch", labelRoute: "Inch to Centimeter", labelReverseRoute: "Centimeter to Inch"   },
 { route: "inch-to-meter", reverseRoute: "meter-to-inch", labelRoute: "Inch to Meter", labelReverseRoute: "Meter to Inch"   },
 { route: "inch-to-kilometer", reverseRoute: "kilometer-to-inch", labelRoute: "Inch to Kilometer", labelReverseRoute: "Kilometer to Inch"   },
 { route: "foot-to-meter", reverseRoute: "meter-to-foot", labelRoute: "Foot to Meter", labelReverseRoute: "Meter to Foot"   },
 { route: "foot-to-centimeter", reverseRoute: "centimeter-to-foot", labelRoute: "Foot to Centimeter", labelReverseRoute: "Centimeter to Foot"   },
 { route: "foot-to-kilometer", reverseRoute: "kilometer-to-foot", labelRoute: "Foot to Kilometer", labelReverseRoute: "Kilometer to Foot"   },
 { route: "league-to-kilometer", reverseRoute: "kilometer-to-league", labelRoute: "League to Kilometer", labelReverseRoute: "Kilometer to League"   },
 { route: "mile-to-kilometer", reverseRoute: "kilometer-to-mile", labelRoute: "Mile to Kilometer", labelReverseRoute: "Kilometer to Mile"   },
 { route: "mile-to-meter", reverseRoute: "meter-to-mile", labelRoute: "Mile to Meter", labelReverseRoute: "Meter to Mile"   },
 { route: "yard-to-meter", reverseRoute: "meter-to-yard", labelRoute: "Yard to Meter", labelReverseRoute: "Meter to Yard"   },
 { route: "yard-to-mile", reverseRoute: "mile-to-yard", labelRoute: "Yard to Mile", labelReverseRoute: "Mile to Yard"   },
 { route: "yard-to-kilometer", reverseRoute: "kilometer-to-yard", labelRoute: "Yard to Kilometer", labelReverseRoute: "Kilometer to Yard"   },
 { route: "millimeter-to-meter", reverseRoute: "meter-to-millimeter", labelRoute: "Millimeter to Meter", labelReverseRoute: "Meter to Millimeter"   },
 { route: "micrometer-to-meter", reverseRoute: "meter-to-micrometer", labelRoute: "Micrometer to Meter", labelReverseRoute: "Meter to Micrometer" },]);


  constructor() {    
    
  }


  

  getConversionRate(fromUnit:string, toUnit:string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);
    
    if (!fromUnitData || !toUnitData) {
      throw new Error("Invalid units provided.");
    }
    return this.calculateConversionRate(toUnitData.conversionRate,fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1:number,conversionRate2:number){
    const rate1 = new Decimal(conversionRate1);
    const rate2 = new Decimal(conversionRate2);
    return rate2.div(rate1).toNumber()
  }


}