/*  No Need to change Xs to Ts
 *  Enter names of menuLinks to keep track to their stopPoints
 *  Enter "loop": true at the stopPoint at the end of a loop, not the start, the end
*/

var srcArray = [
// This just start the video at the beginning of the MP4
    {
        "src_start": null,
        "src_end": null,
        "stopPoint": null,
        "menuLink": "Opening",
        "side": false,
        "loop": false
    },
    {
        "src_start": 0.0,
        "src_end": 1.6949728260869565,
        "stopPoint": 0,
        "menuLink": null,
        "side": false,
        "loop": false
    },
    {
        "src_start": 3.395006793478261,
        "src_end": 5.862007472826087,
        "stopPoint": 1,
        "menuLink": null,
        "side": false,
        "loop": false
    },

// This notes that the first menu link, menu1, will goto stopPoint 2, to be called linkName 
    {
        "src_start": 7.56204144021739,
        "src_end": 9.261973505434783,
        "stopPoint": 2,
        "menuLink": "linkName",
        "side": false,
        "loop": false
    },

    {
        "src_start": 13.39500679347826,
        "src_end": 16.229025135869566,
        "stopPoint": 4,
        "menuLink": null,
        "side": false,
        "loop": false
    },

// This evokes a loop between src_end of stopPoint 4 and src_start of stopPOint 5
    {
        "src_start": 17.92897418478261,
        "src_end": 19.862007472826086,
        "stopPoint": 5,
        "menuLink": null,
        "side": false,
        "loop": true
    },
];