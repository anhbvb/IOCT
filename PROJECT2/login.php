<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=eight">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./CSS/login.css">
    <link rel="stylesheet" href="./fontawesome/css/all.min.css">
    <title>ĐĂNG NHẬP</title>
</head>
<body>
    <div id="wrapper">
        <form action="logins.php" id="form-login">
            <div class="exit">
                <a href="./live.html" class=""><i class="fa-solid fa-xmark"></i></a> 
             </div>
            <h1 class="form-heading">Đăng nhập</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name='username' placeholder="Tên đăng nhập">
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name='password' placeholder="Mật khẩu">
                <div id="eye">
                    <i class="far fa-eye-slash"></i>
                </div>
            </div>
            <input type="submit" value="đăng nhập"  class="form-submit">
            <h2 class="regi"><a href="./register.html">đăng ký</a></h2>
        </form>

    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script src="./js/main.js"></script>
</html>