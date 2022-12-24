// This function simulates getting raw data from the server side
// DO NOT MODIFY this function.
function get_raw_data() {
    return [
        { recommend: false, favourites: ["www", "html", "javascript", "nodejs", "mongodb", "react"], skipped: 0 },
        { recommend: true, favourites: ["www", "html", "javascript", "mongodb"], skipped: 1 },
        { recommend: false, favourites: ["www", "javascript", "mongodb"], skipped: null },
        { recommend: false, favourites: ["www", "html", "react"], skipped: 0 },
        { recommend: false, favourites: ["html", "javascript", "nodejs", "mongodb"], skipped: 0 },
        { recommend: true, favourites: ["www", "html", "nodejs", "mongodb"], skipped: 0 },
        { recommend: false, favourites: ["www", "html", "javascript", "nodejs", "mongodb"], skipped: 0 },
        { recommend: true, favourites: ["www", "html", "nodejs", "react"], skipped: 1 },
        { recommend: true, favourites: ["mongodb", "react"], skipped: 0 },
        { recommend: true, favourites: ["www", "html", "javascript", "nodejs", "mongodb", "react"], skipped: 0 },
        { recommend: true, favourites: ["javascript", "nodejs", "react"], skipped: null },
        { recommend: true, favourites: ["html", "javascript", "react"], skipped: 0 },
        { recommend: true, favourites: ["html", "nodejs", "mongodb"], skipped: null },
        { recommend: false, favourites: ["nodejs", "mongodb"], skipped: 0 },
        { recommend: true, favourites: ["html", "javascript", "nodejs", "mongodb"], skipped: 0 },
        { recommend: true, favourites: ["www", "javascript", "mongodb"], skipped: 0 },
        { recommend: false, favourites: ["nodejs", "mongodb", "react"], skipped: null },
        { recommend: true, favourites: ["nodejs", "mongodb", "react"], skipped: 2 },
        { recommend: true, favourites: ["react"], skipped: 2 },
        { recommend: false, favourites: ["html", "javascript", "nodejs", "react"], skipped: null },
        { recommend: true, favourites: ["javascript", "nodejs", "react"], skipped: 3 },
        { recommend: true, favourites: ["javascript", "nodejs", "react"], skipped: 0 },
        { recommend: false, favourites: ["html", "javascript", "mongodb", "react"], skipped: 0 },
        { recommend: false, favourites: ["www", "nodejs", "mongodb", "react"], skipped: 0 },
        { recommend: true, favourites: ["javascript", "nodejs", "react"], skipped: 0 },
        { recommend: false, favourites: ["html", "javascript", "react"], skipped: 0 },
        { recommend: true, favourites: ["www", "html", "nodejs", "mongodb", "react"], skipped: 0 },
        { recommend: false, favourites: ["html", "javascript", "nodejs", "mongodb"], skipped: 1 },
        { recommend: true, favourites: ["www", "javascript", "mongodb"], skipped: 1 },
        { recommend: true, favourites: ["www", "html", "nodejs", "mongodb"], skipped: null },
        { recommend: true, favourites: ["www", "html", "javascript", "nodejs", "mongodb"], skipped: 0 },
    ]
}

function get_recommendation_data() {
    const data = get_raw_data()

    let recommend = 0
    let not_recommend = 0

    for (const record of data) {
        if (record.recommend) {
            recommend++
        } else {
            not_recommend++
        }
    }

    return [recommend, not_recommend]
}

function get_favourites_data() {
    const data = get_raw_data()

    let result = {}

    for (const record of data) {
        for (const favourite of record.favourites) {
            if (favourite in result) {
                result[favourite]++
            } else {
                result[favourite] = 1
            }
        }
    }

    return result
}

function get_skipping_data() {
    const data = get_raw_data()

    let result = []

    for (const record of data) {
        if (record.skipped === null) {
            continue
        }
        while (result.length <= record.skipped) {
            result.push(0)
        }
        result[record.skipped]++
    }

    return result
}

// Scale the width and height of the canvas element according to the device pixel density to make the plot clear on hi-res displays
// refer to https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
function set_up_canvas(canvas_id) {
    const ctx = document.getElementById(canvas_id).getContext("2d")
    ctx.canvas.style.width = `${ctx.canvas.width}px`
    ctx.canvas.style.height = `${ctx.canvas.height}px`
    ctx.canvas.width = ctx.canvas.width * window.devicePixelRatio
    ctx.canvas.height = ctx.canvas.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    return ctx
}

// Step 4: complete this function
function plot_recommend(recommend_data) {
    const ctx = set_up_canvas("result_recommend")
    ctx.font = `12px sans-serif`

    const radius = 120

    const color_for_recommend = 'rgb(255, 99, 132)'
    const color_for_not_recommend = 'rgb(54, 162, 235)'

    const degree_for_recommend = (recommend_data[0]/(recommend_data[0] + recommend_data[1])) * 360 * Math.PI / 180;
    const degree_for_not_recommend = (recommend_data[1]/(recommend_data[0] + recommend_data[1])) * 360 * Math.PI / 180;


    

    ctx.beginPath();
    ctx.moveTo(120, 120);
    ctx.arc(120, 120, radius, 0, degree_for_recommend);
    ctx.closePath();
    ctx.fillStyle = color_for_recommend;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(120, 120);
    ctx.arc(120, 120, radius, degree_for_recommend, 0);
    ctx.closePath();
    ctx.fillStyle = color_for_not_recommend;
    ctx.fill();

    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.textAlign = 'center';
    ctx.fillText('not recommend', 480/3.5, 480/7);
    ctx.fillText(' recommend', 480/4.5, 480/2.8)

}

function show_results() {
    const recommendation_data = get_recommendation_data()
    plot_recommend(recommendation_data)

    const favourites_data = get_favourites_data()
    document.querySelector("#result_favourites").textContent = Object.entries(favourites_data)
        .map(([topic, students]) => `${topic}: ${students}`)
        .join('\n')

    const skipping_data = get_skipping_data()
    document.querySelector("#result_skipping").textContent = skipping_data
        .map((students, skipped)  => `${skipped}: ${students} student${students == 1 ? '' : 's'}`)
        .join('\n')
}
