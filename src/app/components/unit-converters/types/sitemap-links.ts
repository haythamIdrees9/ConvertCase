export function generateUnitLinks(path:string,units:any) {
  let unitLinks:string = '';

  // Iterate through each unit in the list
  
  units.forEach((unitA:any, indexA:number) => {
      units.forEach((unitB:any, indexB:number) => {
          if (indexA !== indexB) {
              // Create a link from unitA to unitB
              unitLinks = unitLinks.concat(generateSiteMapUrl(path,unitA.key,unitB.key));
          }
      });
  });

  return unitLinks;
}

function generateSiteMapUrl(path:string,unit1:string,unit2:string){
  return `<url>
  <loc>${path}${unit1}-to-${unit2}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
  <lastmod>2023-09-08</lastmod>
  </url>`;
}