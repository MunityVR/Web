document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
document.body.classList.style.color("divider") = sessionStorage.getItem('cd');
document.body.classList.style.color("footdiv") = sessionStorage.getItem('cf');

function darkmode() {
     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

            sessionStorage.setItem('bg', 'rgb(0, 0, 0)');
            sessionStorage.setItem('cc', '#FFFFFF');
            sessionStorage.setItem('cd', '#606060')
            sessionStorage.setItem('cf', '#606060')


     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(0, 0, 0)');
        sessionStorage.setItem('cc', '#FFFFFF');
        sessionStorage.setItem('cd', '#606060')
        sessionStorage.setItem('cf', '#606060')

    }
    else if( sessionStorage.getItem('bg') === 'rgb(0, 0, 0)') {

        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#000000');
        sessionStorage.setItem('cd', '#7B7B7B')
        sessionStorage.setItem('cf', '#7B7B7B')


    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
document.body.classList.style.color("divider") = sessionStorage.getItem('cd');
document.body.classList.style.color("footdiv") = sessionStorage.getItem('cf');

}