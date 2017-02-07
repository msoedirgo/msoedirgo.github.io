<?php
    $servername= "localhost";
    $username= "procodecg";
    $password="procodecg";
    $dbname="procodecgware";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die('Could not connect!<br/>Contact the site\'s admin.');
    }
    //echo 'berhasil';
    $sql = "SELECT * FROM produk WHERE nama LIKE 'kursi%' ";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        //output data of each row
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"] . " Nama: " . $row["nama"] . " Deskripsi: " . $row["deskripsi"] ."
            <br>";
            }
    } else {
        echo "0 result";}
    $conn->close();
?>