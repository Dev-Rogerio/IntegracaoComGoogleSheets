<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste de Hospedagem - Locaweb</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #F8F9FA;
      margin: 0;
      padding: 0;
    }
    .container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
      text-align: center;
      max-width: 600px;
      width: 100%;
      box-sizing: border-box;
      margin: auto;
      margin-top: 20px;
    }
    h1 {
      font-size: 24px;
      color: #343A40;
      margin-bottom: 20px;
    }
    .info {
      font-size: 18px;
      color: #6C757D;
      margin-bottom: 10px;
    }
    .clock {
      font-size: 24px;
      color: #007BFF;
      margin-bottom: 20px;
      border-bottom: 2px solid #007BFF;
      padding-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Teste de Hospedagem - Locaweb</h1>
    <?php echo "<div class='info'>Versão do PHP: " . phpversion() . "</div>"; ?>
    <div class="clock" id="clock"></div>
  </div>
  <script>
    function updateClock() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;
      document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(updateClock, 1000);
    updateClock();
  </script>
</body>
</html>
