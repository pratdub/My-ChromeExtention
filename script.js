async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09c35b20c0mshdcbdf23cc9a2d03p13a1afjsnebfe92ab9239',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };
    
    const res=await fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18', options)
    const record=await res.json();
    console.log(record);
    document.getElementById("my quote").innerHTML=record.chapter_summary;
}
fetchData();