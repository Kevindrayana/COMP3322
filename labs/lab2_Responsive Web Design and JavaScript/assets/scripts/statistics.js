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

// Step 7: Implement this function
function get_recommendation_data() {
    const data = get_raw_data()
    
    let recommend = 0;
    let not_recommend = 0;

    for(d of data){ 
        d.recommend ? recommend += 1 : not_recommend += 1;
    }

    return [recommend, not_recommend];
}

// Step 8: Implement this function
function get_favourites_data() {
    const data = get_raw_data()

    let result = {
        www: 0,
        html: 0,
        javascript: 0,
        nodejs: 0,
        mongodb: 0,
        react: 0
    }
	
	for(d of data){
        if (d.favourites.includes('www')){
            result.www += 1
        }
        if (d.favourites.includes('html')){
            result.html += 1
        }
        if (d.favourites.includes('javascript')){
            result.javascript += 1
        }
        if (d.favourites.includes('nodejs')){
            result.nodejs += 1
        }
        if (d.favourites.includes('mongodb')){
            result.mongodb += 1
        }
        if (d.favourites.includes('react')){
            result.react += 1
        }
    }
	
    return result
}

// Step 9: Implement this function
function get_skipping_data() {
    const data = get_raw_data()

    // The i-th element is the number of students who skipped i lectures
    // For example, the following placeholder values mean 20 students skipped 0 lecture, 2 students skipped 1 lecture, etc.
    // Records with skipped == null (the student did not answer the question) should be ignored.
    let result = [0, 0, 0, 0]
	
    for (d of data){
        if (d.skipped !== null){
            result[d.skipped] += 1
        }
    }
	
	
	

    return result
}


// Display the statistics. DO NOT MODIFY this function.
function show_results() {
    const recommendation_data = get_recommendation_data()
    document.querySelector("#result_recommend").textContent = `
Recommended: ${recommendation_data[0]}
Not Recommended: ${recommendation_data[1]}
`.trim()

    const favourites_data = get_favourites_data()
    document.querySelector("#result_favourites").textContent = Object.entries(favourites_data)
        .map(([topic, students]) => `${topic}: ${students}`)
        .join('\n')

    const skipping_data = get_skipping_data()
    document.querySelector("#result_skipping").textContent = skipping_data
        .map((students, skipped)  => `${skipped}: ${students} student${students == 1 ? '' : 's'}`)
        .join('\n')
}
