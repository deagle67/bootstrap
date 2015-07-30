<?php

include("HTML_HEADER.php");

echo '
<p>Bonjour !</p>

<p>Je sais comment tu t\'appelles, ha ha. Tu t\'appelles ' . strip_tags($_POST['prenom']) . ' !</p>

<p>Si tu veux changer de prénom, <a href="index.php">clique ici</a> pour revenir à la page formulaire.php.</p>
';

include("HTML_FOOTER.php");

?>