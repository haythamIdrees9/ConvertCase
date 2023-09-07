import { Injectable } from '@angular/core';

@Injectable()
export class UnitsInfoService {
  private conversionDescriptions: any = {
    "square-meter": "<section id=\"square-meter-converter\" aria-label=\"Square Meter Converter Description\">\n          <h3>Square Meter Converter</h3>\n\n          <p>The square meter (m²) is the fundamental unit of area measurement in the International System of Units\n               (SI). It represents the area of a square with sides that are each one meter in length. This versatile\n               unit is widely used in scientific, engineering, and everyday contexts for measuring land, rooms, and\n               other spaces.</p>\n\n          <p>When converting square meters to square kilometers, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Meter (m²) = 0.000001 Square Kilometer (km²)</strong></p>\n\n          <p>This conversion factor highlights the significant difference in scale between these two units.</p>\n\n          <p>To perform the conversion, simply multiply the number of square meters by 0.000001 to obtain the equivalent\n               area in square kilometers. This conversion is frequently employed when dealing with larger land areas or\n               regions.</p>\n     </section>",
    "square-kilometer": "<section id=\"square-kilometer-converter\" aria-label=\"Square Kilometer Converter Description\">\n          <h3>Square Kilometer Converter</h3>\n\n          <p>The square kilometer (km²) is a larger unit of area measurement commonly used to represent vast land areas\n               or regions. It is the equivalent of a square with sides that are each one kilometer in length. This unit\n               finds extensive application in geographical, environmental, and urban planning contexts due to its\n               ability to cover large areas efficiently.</p>\n\n          <p>When converting square kilometers to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Kilometer (km²) = 1,000,000 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor demonstrates the significant difference in scale between these two units.</p>\n\n          <p>To perform the conversion, simply multiply the number of square kilometers by 1,000,000 to obtain the\n               equivalent area in square meters. This is a straightforward calculation and is often used when dealing\n               with large land areas, such as measuring the size of countries or regions.</p>\n     </section>",
    "hectare": "<section id=\"hectare-converter\" aria-label=\"Hectare Converter Description\">\n          <h3>Hectare Converter</h3>\n\n          <p>The hectare (ha) is a metric unit of area measurement commonly used in agriculture, land management, and\n               urban planning. One hectare is equivalent to 10,000 square meters or 0.01 square kilometers. It is often\n               used to measure land areas, especially in the context of large fields or plots.</p>\n\n          <p>When converting hectares to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Hectare (ha) = 10,000 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor emphasizes the convenience of using hectares for measuring larger areas.</p>\n\n          <p>To perform the conversion, simply multiply the number of hectares by 10,000 to obtain the equivalent area\n               in square meters. This conversion is particularly useful in agricultural and land management scenarios.\n          </p>\n     </section>",
    "acre": "<section id=\"acre-converter\" aria-label=\"Acre Converter Description\">\n          <h3>Acre Converter</h3>\n\n          <p>The acre (ac) is a unit of area measurement commonly used in various countries, especially in the United\n               States and some parts of the United Kingdom. One acre is equivalent to 4,840 square yards or 43,560\n               square feet. It is often used for measuring land areas, such as agricultural plots or real estate.</p>\n\n          <p>When converting acres to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Acre (ac) = 4046.86 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the difference in scale between acres and square meters, making it useful\n               for real estate and land development calculations.</p>\n\n          <p>To perform the conversion, simply multiply the number of acres by 4046.86 to obtain the equivalent area in\n               square meters. This conversion is commonly employed in real estate transactions and land management.</p>\n     </section>",
    "square-mile": "<section id=\"square-mile-converter\" aria-label=\"Square Mile Converter Description\">\n          <h3>Square Mile Converter</h3>\n\n          <p>The square mile (mi²) is a unit of area measurement commonly used in the United States and some other\n               countries. It represents an area of one square with sides that are each one mile in length. Square miles\n               are often used for measuring large land areas, such as counties, cities, and states.</p>\n\n          <p>When converting square miles to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Mile (mi²) = 2,589,988.11 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor emphasizes the significant difference in scale between square miles and square\n               meters, making it useful for geographical and urban planning applications.</p>\n\n          <p>To perform the conversion, simply multiply the number of square miles by 2,589,988.11 to obtain the\n               equivalent area in square meters. This conversion is commonly used in geographical studies, city\n               planning, and land development.</p>\n     </section>",
    "square-centimeter": "<section id=\"square-centimeter-converter\" aria-label=\"Square Centimeter Converter Description\">\n          <h3>Square Centimeter Converter</h3>\n\n          <p>The square centimeter (cm²) is a small unit of area measurement commonly used in various fields, including\n               science, engineering, and everyday measurements. It represents an area of one square with sides that are\n               each one centimeter in length. Square centimeters are often used for measuring small objects, surface\n               areas, and dimensions.</p>\n\n          <p>When converting square centimeters to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Centimeter (cm²) = 0.0001 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the tiny scale of square centimeters in comparison to square meters,\n               making it useful for precise measurements and calculations.</p>\n\n          <p>To perform the conversion, simply multiply the number of square centimeters by 0.0001 to obtain the\n               equivalent area in square meters. This conversion is commonly employed in scientific research,\n               engineering, and architectural drawings.</p>\n     </section>",
    "square-millimeter": "<section id=\"square-millimeter-converter\" aria-label=\"Square Millimeter Converter Description\">\n          <h3>Square Millimeter Converter</h3>\n\n          <p>The square millimeter (mm²) is a tiny unit of area measurement often used in precision engineering,\n               manufacturing, and scientific applications. It represents an area of one square with sides that are each\n               one millimeter in length. Square millimeters are ideal for measuring extremely small areas, such as\n               electronic components or microscopic features.</p>\n\n          <p>When converting square millimeters to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Millimeter (mm²) = 0.000001 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the minuscule scale of square millimeters in comparison to square meters,\n               making it suitable for highly accurate measurements and precise calculations.</p>\n\n          <p>To perform the conversion, simply multiply the number of square millimeters by 0.000001 to obtain the\n               equivalent area in square meters. This conversion is widely used in scientific research,\n               microfabrication, and manufacturing processes.</p>\n     </section>",
    "square-yard": "<section id=\"square-yard-converter\" aria-label=\"Square Yard Converter Description\">\n          <h3>Square Yard Converter</h3>\n\n          <p>The square yard (yd²) is a unit of area measurement commonly used in the United States and some other\n               countries. It represents an area of one square with sides that are each one yard (three feet) in length.\n               Square yards are often used for measuring land areas, especially in real estate and construction\n               contexts.</p>\n\n          <p>When converting square yards to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Yard (yd²) = 0.83612736 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the difference in scale between square yards and square meters, making it\n               useful for land development, construction, and property assessments.</p>\n\n          <p>To perform the conversion, simply multiply the number of square yards by 0.83612736 to obtain the\n               equivalent area in square meters. This conversion is commonly used in architectural plans, landscaping,\n               and real estate transactions.</p>\n     </section>",
    "square-foot": "<section id=\"square-foot-converter\" aria-label=\"Square Foot Converter Description\">\n          <h3>Square Foot Converter</h3>\n\n          <p>The square foot (ft²) is a unit of area measurement widely used in the United States and some other\n               countries. It represents an area of one square with sides that are each one foot in length. Square feet\n               are commonly used for measuring real estate, room dimensions, and construction areas.</p>\n\n          <p>When converting square feet to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Foot (ft²) = 0.09290304 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the difference in scale between square feet and square meters, making it\n               useful for architectural plans, interior design, and property assessments.</p>\n\n          <p>To perform the conversion, simply multiply the number of square feet by 0.09290304 to obtain the equivalent\n               area in square meters. This conversion is commonly used in construction and real estate industries.</p>\n     </section>",
    "square-inch": "<section id=\"square-inch-converter\" aria-label=\"Square Inch Converter Description\">\n          <h3>Square Inch Converter</h3>\n\n          <p>The square inch (in²) is a small unit of area measurement often used in engineering, design, and various\n               technical applications. It represents an area of one square with sides that are each one inch in length.\n               Square inches are ideal for measuring small surfaces, such as electronic components or fine details.</p>\n\n          <p>When converting square inches to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Inch (in²) = 0.00064516 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the tiny scale of square inches in comparison to square meters, making it\n               suitable for highly accurate measurements and technical drawings.</p>\n\n          <p>To perform the conversion, simply multiply the number of square inches by 0.00064516 to obtain the\n               equivalent area in square meters. This conversion is commonly used in engineering, manufacturing, and\n               precision design.</p>\n     </section>",
    "are": "<section id=\"are-converter\" aria-label=\"Are Converter Description\">\n          <h3>Are Converter</h3>\n\n          <p>The are (a) is a unit of area measurement used in some European countries, including France and\n               Switzerland. One are is equivalent to 100 square meters (m²). It provides a convenient and\n               straightforward way to express land areas, especially for smaller plots and land parcels.</p>\n\n          <p>When converting ares to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Are (a) = 100 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from ares to square meters, making\n               it useful for real estate transactions, urban planning, and land management.</p>\n\n          <p>To perform the conversion, simply multiply the number of ares by 100 to obtain the equivalent area in\n               square meters. This conversion is commonly used in European countries for land area measurements and\n               assessments.</p>\n     </section>",
    "dunam": "<section id=\"dunam-converter\" aria-label=\"Dunam Converter Description\">\n          <h3>Dunam Converter</h3>\n\n          <p>The dunam (daa or dunum) is a unit of area measurement commonly used in various Middle Eastern countries,\n               including Palestine. One dunam is equivalent to 1,000 square meters. It is often used to measure land\n               areas, especially in agriculture and real estate transactions.</p>\n\n          <p>When converting dunams to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Dunam (daa) = 1,000 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from dunams to square meters, making\n               it useful for agricultural planning and land management.</p>\n\n          <p>To perform the conversion, simply multiply the number of dunams by 1,000 to obtain the equivalent area in\n               square meters. This conversion is commonly used in agricultural contexts, especially for field\n               measurements and land assessments.</p>\n     </section>",
    "feddan": "<section id=\"feddan-converter\" aria-label=\"Feddan Converter Description\">\n          <h3>Feddan Converter</h3>\n\n          <p>The feddan is a unit of area measurement commonly used in some Middle Eastern and North African countries,\n               including Egypt and Sudan. One feddan is equivalent to 4,200 square meters. It is often used for\n               measuring agricultural land areas and land assessments.</p>\n\n          <p>When converting feddans to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Feddan = 4,200 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from feddans to square meters,\n               making it useful for agricultural planning and land management.</p>\n\n          <p>To perform the conversion, simply multiply the number of feddans by 4,200 to obtain the equivalent area in\n               square meters. This conversion is commonly used in agriculture and land assessment practices.</p>\n     </section>",
    "rai": "<section id=\"rai-converter\" aria-label=\"Rai Converter Description\">\n          <h3>Rai Converter</h3>\n\n          <p>The rai (rai) is a traditional unit of land area measurement used in Thailand. One rai is equivalent to\n               1,600 square meters (m²). It is a common unit for expressing land areas in Thailand, especially for\n               agricultural and land assessment purposes.</p>\n\n          <p>When converting rai to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Rai (rai) = 1,600 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from rai to square meters, making it\n               useful for agricultural planning, land management, and property transactions in Thailand.</p>\n\n          <p>To perform the conversion, simply multiply the number of rai by 1,600 to obtain the equivalent area in\n               square meters. This conversion is commonly used in Thailand for land area measurements and assessments.\n          </p>\n     </section>",
    "section": "<section id=\"section-converter\" aria-label=\"Section Converter Description\">\n          <h3>Section Converter</h3>\n\n          <p>The section (section) is a unit of land area measurement historically used in the United States for land\n               surveying and property description purposes. One section is equivalent to one square mile (mi²) or\n               2,589,988.11 square meters (m²). It is often used for referencing land divisions, especially in rural\n               areas.</p>\n\n          <p>When converting sections to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Section (section) = 2,589,988.11 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the significant difference in scale between sections and square meters,\n               making it useful for land surveying, property descriptions, and land management.</p>\n\n          <p>To perform the conversion, simply multiply the number of sections by 2,589,988.11 to obtain the equivalent\n               area in square meters. This conversion is historically used in the United States for land area\n               measurements and land description.</p>\n     </section>",
    "township": "<section id=\"township-converter\" aria-label=\"Township Converter Description\">\n          <h3>Township Converter</h3>\n\n          <p>The township (township) is a unit of land area measurement historically used in the United States for land\n               surveying and property description purposes. One township is equivalent to 36 square miles (mi²) or\n               93,239,571.99 square meters (m²). It is a larger division often used for referencing land areas,\n               especially in rural regions and land management.</p>\n\n          <p>When converting townships to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Township (township) = 93,239,571.99 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the vast scale of townships in comparison to square meters, making it\n               useful for land surveying, property descriptions, and land management on a larger scale.</p>\n\n          <p>To perform the conversion, simply multiply the number of townships by 93,239,571.99 to obtain the\n               equivalent area in square meters. This conversion is historically used in the United States for land area\n               measurements and land description at the township level.</p>\n     </section>",
    "circular-mil": "<section id=\"circular-mil-converter\" aria-label=\"Circular Mil Converter Description\">\n          <h3>Circular Mil Converter</h3>\n\n          <p>The circular mil (CM) is a unit of area measurement used in electrical engineering to quantify the\n               cross-sectional area of a wire. One circular mil is equivalent to approximately 5.067075 × 10⁻¹⁰ square\n               meters (m²). It is a small unit used for wire gauge calculations and determining electrical properties of\n               wires.</p>\n\n          <p>When converting circular mils to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Circular Mil (CM) ≈ 5.067075 × 10⁻¹⁰ Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the extremely small scale of circular mils in comparison to square meters,\n               making it ideal for electrical engineering and wire size calculations.</p>\n\n          <p>To perform the conversion, simply multiply the number of circular mils by 5.067075 × 10⁻¹⁰ to obtain the\n               equivalent area in square meters. This conversion is commonly used in electrical engineering for wire\n               gauge and current-carrying capacity calculations.</p>\n     </section>",
    "square-decimeter": "<section id=\"square-decimeter-converter\" aria-label=\"Square Decimeter Converter Description\">\n          <h3>Square Decimeter Converter</h3>\n\n          <p>The square decimeter (dm²) is a unit of area measurement commonly used in various fields, including\n               science, engineering, and everyday measurements. It represents an area of one square with sides that are\n               each one decimeter (0.1 meter) in length. Square decimeters are often used for measuring small objects,\n               surface areas, and dimensions.</p>\n\n          <p>When converting square decimeters to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Square Decimeter (dm²) = 0.01 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor highlights the smaller scale of square decimeters in comparison to square meters,\n               making it useful for precise measurements and calculations.</p>\n\n          <p>To perform the conversion, simply multiply the number of square decimeters by 0.01 to obtain the equivalent\n               area in square meters. This conversion is commonly used in scientific research, engineering, and\n               architectural drawings.</p>\n     </section>",
    "homestead": "<section id=\"homestead-converter\" aria-label=\"Homestead Converter Description\">\n          <h3>Homestead Converter</h3>\n\n          <p>The homestead (homestead) is a unit of land area measurement historically used in the United States for\n               land surveying and property description purposes. One homestead is equivalent to approximately\n               647,497.027584 square meters (m²). It is a larger division often used for referencing land areas,\n               especially in rural regions and land management.</p>\n\n          <p>When converting homesteads to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Homestead (homestead) ≈ 647,497.027584 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the significant scale of homesteads in comparison to square meters, making\n               it useful for land surveying, property descriptions, and land management on a larger scale.</p>\n\n          <p>To perform the conversion, simply multiply the number of homesteads by 647,497.027584 to obtain the\n               equivalent area in square meters. This conversion is historically used in the United States for land area\n               measurements and land description at the homestead level.</p>\n     </section>",
    "bovate": "<section id=\"bovate-converter\" aria-label=\"Bovate Converter Description\">\n          <h3>Bovate Converter</h3>\n\n          <p>The bovate (bovate) is a historical unit of land area measurement used in some European countries. One\n               bovate is equivalent to approximately 505.857 square meters (m²). It was historically used for land\n               division and land assessment purposes.</p>\n\n          <p>When converting bovates to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Bovate (bovate) ≈ 505.857 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the scale of bovates in comparison to square meters, making it useful for\n               historical land area measurements and assessments.</p>\n\n          <p>To perform the conversion, simply multiply the number of bovates by 505.857 to obtain the equivalent area\n               in square meters. While it is not commonly used today, this conversion is relevant for historical and\n               cultural reference.</p>\n     </section>",
    "cuerda-varas": "<section id=\"cuerda-varas-converter\" aria-label=\"Cuerda Varas Converter Description\">\n          <h3>Cuerda-Varas Converter</h3>\n\n          <p>The cuerda-varas (cuerda-varas) is a historical unit of land area measurement used in some Latin American\n               countries. One cuerda-varas is equivalent to approximately 7,084.5 square meters (m²). It was\n               historically used for land division and land assessment purposes.</p>\n\n          <p>When converting cuerda-varas to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Cuerda-Varas (cuerda-varas) ≈ 7,084.5 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the scale of cuerda-varas in comparison to square meters, making it useful\n               for historical land area measurements and assessments, particularly in Latin America.</p>\n\n          <p>To perform the conversion, simply multiply the number of cuerda-varas by 7,084.5 to obtain the equivalent\n               area in square meters. While it is not commonly used today, this conversion is relevant for historical\n               and cultural reference.</p>\n     </section>",
    "cuerda": "<section id=\"cuerda-converter\" aria-label=\"Cuerda Converter Description\">\n          <h3>Cuerda Converter</h3>\n\n          <p>The cuerda (cuerda) is a historical unit of land area measurement used in some Latin American countries.\n               One cuerda is equivalent to approximately 3,937.04 square meters (m²). It was historically used for land\n               division and land assessment purposes.</p>\n\n          <p>When converting cuerdas to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Cuerda (cuerda) ≈ 3,937.04 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the scale of cuerdas in comparison to square meters, making it useful for\n               historical land area measurements and assessments, particularly in Latin America.</p>\n\n          <p>To perform the conversion, simply multiply the number of cuerdas by 3,937.04 to obtain the equivalent area\n               in square meters. While it is not commonly used today, this conversion is relevant for historical and\n               cultural reference.</p>\n     </section>",
    "manzana": "<section id=\"manzana-converter\" aria-label=\"Manzana Converter Description\">\n          <h3>Manzana Converter</h3>\n\n          <p>The manzana (manzana) is a unit of land area measurement used in some Latin American countries. One manzana\n               is equivalent to approximately 1,000 square meters (m²). It is often used for land division and property\n               assessment purposes in Latin American regions.</p>\n\n          <p>When converting manzanas to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Manzana (manzana) = 1,000 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor reflects the scale of manzanas in comparison to square meters, making it useful for\n               land area measurements and property assessments, particularly in Latin America.</p>\n\n          <p>To perform the conversion, simply multiply the number of manzanas by 1,000 to obtain the equivalent area in\n               square meters. This conversion is commonly used in Latin American countries for land area measurements\n               and property valuation.</p>\n     </section>",
    "arpent-acre": "<section id=\"arpent-acre-converter\" aria-label=\"Arpent Acre Converter Description\">\n          <h3>Arpent to Acre Converter</h3>\n\n          <p>The arpent (arpent) is a historical unit of land area measurement used in some parts of the United States,\n               particularly in Louisiana. One arpent is equivalent to approximately 0.84625468 acres (ac). It is a unit\n               that reflects the historical influence of French land measurement in Louisiana.</p>\n\n          <p>When converting arpents to acres, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Arpent (arpent) ≈ 0.84625468 Acres (ac)</strong></p>\n\n          <p>This conversion factor highlights the relationship between arpents and acres, making it useful for\n               historical land area measurements and property assessments in regions where the arpent is still\n               referenced.</p>\n\n          <p>To perform the conversion, simply multiply the number of arpents by 0.84625468 to obtain the equivalent\n               area in acres. This conversion is relevant for historical and cultural reference in Louisiana and other\n               areas where the arpent is used.</p>\n     </section>",
    "stremma-square-meter": "<section id=\"stremma-square-meter-converter\" aria-label=\"Stremma Square Meter Converter Description\">\n          <h3>Stremma to Square Meter Converter</h3>\n\n          <p>The stremma (stremma) is a unit of area measurement commonly used in Greece and some other Mediterranean\n               countries. One stremma is equivalent to 1,000 square meters (m²). It is a convenient unit for measuring\n               land areas, especially in agricultural and rural contexts.</p>\n\n          <p>When converting stremmas to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Stremma (stremma) = 1,000 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from stremmas to square meters,\n               making it useful for agricultural planning, land management, and property transactions in Greece and\n               other regions where the stremma is used.</p>\n\n          <p>To perform the conversion, simply multiply the number of stremmas by 1,000 to obtain the equivalent area in\n               square meters. This conversion is commonly used in Greece and Mediterranean countries for land area\n               measurements and assessments.</p>\n     </section>",
    "djerib-square-meter": "<section id=\"djerib-square-meter-converter\" aria-label=\"Djerib Square Meter Converter Description\">\n          <h3>Djerib to Square Meter Converter</h3>\n\n          <p>The djerib (djerib) is a unit of area measurement commonly used in North Africa, particularly in Tunisia.\n               One djerib is equivalent to approximately 2,500 square meters (m²). It is a convenient unit for measuring\n               land areas, especially in agricultural and rural contexts.</p>\n\n          <p>When converting djeribs to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Djerib (djerib) ≈ 2,800 Square Meters (m²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from djeribs to square meters,\n               making it useful for agricultural planning, land management, and property transactions in North African\n               countries where the djerib is used.</p>\n\n          <p>To perform the conversion, simply multiply the number of djeribs by 2,500 to obtain the equivalent area in\n               square meters. This conversion is commonly used in Tunisia and other North African countries for land\n               area measurements and assessments.</p>\n     </section>",
    "vergee-meter": "<section id=\"vergee-meter-converter\" aria-label=\"Vergee Meter Converter Description\">\n          <h3>Vergée to Meter Converter</h3>\n\n          <p>The vergée (vergée) is a unit of area measurement commonly used in some parts of France, particularly in\n               the Normandy region. One vergée is equivalent to approximately 1,333.33 square meters (m²) or 133,333.33\n               square centimeters (cm²). It is a convenient unit for measuring land areas, especially in agricultural\n               and rural contexts.</p>\n\n          <p>When converting vergées to square meters, it's important to understand that</p>\n\n          <p>Conversion: <strong>1 Vergée (vergée) ≈ 1,333.33 Square Meters (m²) or 133,333.33 Square Centimeters\n                    (cm²)</strong></p>\n\n          <p>This conversion factor simplifies the process of converting land areas from vergées to square meters or\n               square centimeters, making it useful for agricultural planning, land management, and property\n               transactions in regions of France where the vergée is used.</p>\n\n          <p>To perform the conversion to square meters, simply multiply the number of vergées by 1,333.33. To convert\n               to square centimeters, multiply by 133,333.33. This conversion is commonly used in Normandy and other\n               parts of France for land area measurements and assessments.</p>\n     </section>"
}

  getDescription(unitName: string) {
    return this.conversionDescriptions[unitName];
  }


}