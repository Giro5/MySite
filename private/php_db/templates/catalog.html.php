<?php htmlHead(); ?>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Мой сайт</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <?php
            linksNav($link, "catalog");
            ?>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>

<div class="container">
    <div class="card-deck">
        <?php

        for ($i = 0; $i < count($cards); $i++) {
            ?>

            <div class="card">
                <img src="<?php echo $cards[$i]["images"] ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $cards[$i]["title"] ?></h5>
                    <p class="card-text"><?php echo $cards[$i]["text"] ?></p>
                    <p class="card-text"><small class="text-muted"><?php echo $cards[$i]["time"] ?></small></p>
                </div>
            </div>
        <?php
        }
        ?>
    </div>
</div>
<br>
<div class="container">
    <div class="card-deck">
        <?php
        $query = mysqli_query($link, "select * from catalog");
        while ($row = mysqli_fetch_assoc($query)) {
            ?>

            <div class="card shadow">
                <img src="<?php echo $row["image"] ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $row["title"] ?></h5>
                    <p class="card-text"><?php echo $row["text"] ?></p>
                    <p class="card-text"><small class="text-muted"><?php echo $row["time"] ?></small></p>
                </div>
            </div>
        <?php
        }
        ?>
    </div>
</div>

<?php htmlEnd(); ?>