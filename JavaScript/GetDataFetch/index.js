fetch('https://jsonplaceholder.typicode.com/posts?fbclid=IwAR1PlwAu6_1h2_2BfgQnTjdmPxW_SzEi-L-k2IuAbDJj0hjfhSd73baupGk')
    .then(response => response.json())
    .then(res => {
        for(let i = 0; i < res.length; i++){
            const tbodyElement = document.getElementById("tbody")
            tbodyElement.innerHTML += `
                <tr>
                    <td>${res[i].userId}</td>
                    <td>${res[i].id}</td>
                    <td>${res[i].title}</td>
                </tr>
            `
        }
        console.log(res);
    });
