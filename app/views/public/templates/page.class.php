<?php
require_once("app/helpers/component.class.php");
class Page extends Component{
    public static function templateHeader($title){
        print("
        <!DOCTYPE html>
        <html lang='es'>
        <head> 
            <meta charset='utf-8'>
            <title>$title</title>
                <link type='text/css' rel='stylesheet' media='screen,projection' href='web/css/materialize.min.css'/>
                <link type='text/css' rel='stylesheet' href='web/css/material_icons.css'/>
                <link type='text/css' rel='stylesheet' href='web/css/main.css'/>
                <link rel='preconnect' href='https://fonts.gstatic.com'>
                <link href='https://fonts.googleapis.com/css2?family=Jomhuria&display=swap' rel='stylesheet'>
                <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,500&display=swap' rel='stylesheet'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </meta>
        </head>
        <header>
        <div class='navbar-fixed'>
            <nav>
            <div class='nav-wrapper'>
            </div>
            </nav>
        </div>    
        </header> 
    <main onselectstart='return false'>
");   
    }             

    public static function templateFooter(){
        print("
        </main>
        <footer class='page-footer'>
            <div class='footer-copyright'>
                <div class='container'>
                    © 2014 Copyright Text
                    <a class='grey-text text-lighten-4 right' href='#!'>More Links</a>
                </div>
            </div>
        </footer>
            <!--se llaman las opciones para que la pagina pueda utlizar debidas especificaciones-->
            <script type='text/javascript' src='web/js/jquery-3.3.1.min.js'></script>
            <script type='text/javascript' src='web/js/materialize.min.js'></script>
            <script type='text/javascript' src='web/js/main.js'></script>
         </body>
	</html>
        ");
    }
}
?>