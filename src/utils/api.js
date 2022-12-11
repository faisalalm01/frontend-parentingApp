async function getAllData() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=53c40de6addf429a897b4186e44a1f90');
    const responseJson = await response.json();
    
    console.log(responseJson);
    return [];
}

export { getAllData };
