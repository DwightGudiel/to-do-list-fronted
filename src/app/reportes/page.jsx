import LayoutApp from "../dashboard/layout";


function Reportes(){
    return(
        <LayoutApp>
            <iframe title="Report Section" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNmYxYTFhYWUtNTYyYi00OWNhLWIzYjAtNzhmYjg4YjI5N2VhIiwidCI6ImM4YzRhNTQxLWM2YzAtNDI2YS1hNzhiLWZlZDIwYmY3MDRlZiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
        </LayoutApp>
    )
}

export default Reportes;