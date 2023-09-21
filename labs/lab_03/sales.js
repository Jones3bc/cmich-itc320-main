/*
 * @Author Brock Jones
 * @Date 09/19/2023
 * @Purpose To summarize and display totals for the sales of multiple regions over multiple quarters.
 */
"use strict";

//Regions to summarize.
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//Hold all HTML content to write to the page.
let html = ""

//Sales by quarter.
html += "<h2>Sales by Quarter</h2>";
html += "<p>";
for(let i = 0; i < 4; i++){
    html += `Q${i + 1}: \$${region1[i] + region2[i] + region3[i] + region4[i] + region5[i]}<br>`;
}
html += "</p>";

//Sales by region
html += "<h2>Sales by Region</h2>";
let region1Total = 0.00;
let region2Total = 0.00;
let region3Total = 0.00;
let region4Total = 0.00;
let region5Total = 0.00;

//Add all quarters together to get the Regional Totals.
for(let i = 0; i < 4; i++){
    region1Total += region1[i];
    region2Total += region2[i];
    region3Total += region3[i];
    region4Total += region4[i];
    region5Total += region5[i];
}

//Display Regional totals.
html += `<p>Region 1: \$${region1Total}<br>
         Region 2: \$${region2Total}<br>
         Region 3: \$${region3Total}<br>
         Region 4: \$${region4Total}<br>
         Region 5: \$${region5Total}<br></p>`;

//Total sales.
html += "<h2>Total Sales</h2>";
html += `<p>\$${region1Total + region2Total + region3Total + region4Total + region5Total}</p>`;

//Write all html content to page.
document.write(html);