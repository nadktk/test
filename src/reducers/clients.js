import $ from 'jquery';

export default function(){
    const url = 'https://raw.githubusercontent.com/nadktk/11/master/clients.json';
    let clients;
    $.ajax({
        type: "GET", 
        url: url,
        async: false,
        success: data => {
            clients = JSON.parse(data); 
        }
    });   
    return clients;
}