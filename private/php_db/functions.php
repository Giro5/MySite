<?php
function htmlHead()
{
    ?>
    <!DOCTYPE html>
    <html lang="ru">

    <head>
        <meta charset="UTF-8">
        <title>Моя страница</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="js/jquery-3.4.1.min.js">
        <link rel="stylesheet" href="js/bootstrap.bundle.min.js">
        <link rel="stylesheet" href="js/bootstrap.min.js">
    </head>

    <body>
    <?php
    }

    function htmlEnd()
    {
        ?>
    </body>

    </html>
    <?php
    }


    function linksNav($linkDB, $active = "")
    {
        $q = mysqli_query($linkDB, "select * from links");

        while ($arr = mysqli_fetch_assoc($q)) {
            ?>
        <li class="nav-item <?php echo $arr["name"] == $active ? "active" : ""; ?>">
            <a class="nav-link" href="<?php echo "../php_db/" . $arr["name"] . ".php"; ?>"><?= $arr["title"]; ?></a>
        </li>
<?php
    }
}
