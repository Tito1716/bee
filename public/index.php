<?php 
require_once("app/views/public/templates/page.class.php");
Page::templateHeader("BeeFluffy");
require_once("app/controllers/public/index_controller.php");
Page::templateFooter();
?>