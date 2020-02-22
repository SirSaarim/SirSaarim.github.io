<%@ Page Title="FPF- Wallpapers" Language="C#" MasterPageFile="~/FPFSite.Master" AutoEventWireup="true" CodeBehind="FPFWallpapers.aspx.cs" Inherits="FourPointFiveWebsite.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="CPHead" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="CPBody" runat="server">

    <html>
    <body>
        <div>
            <h1>4.5 WALLPAPER DOWNLOAD </h1>
            <hr>
            <br>
            <img src="\Images\Wallpapers\4.5 Lock Screen.jpg" class="img-fluid center-wallpaper" alt="4.5 Responsive Wallpaper">

            <br>
            <a href="\Images\Wallpapers\4.5 Home Screen.jpg" download="NARIMwallpaper2020">
                <button class="center-wallpaper">DOWNLOAD WALLPAPER</button>
            </a>


              <br>
              <br>
              <br>
              <br>
              <br>

            <h1 style="text-align: center;">NARIM WALLPAPER DOWNLOAD </h1>
            <hr>
            <br>
            <img src="\Images\Wallpapers\NARIM Lock Screen.jpg" class="img-fluid center-wallpaper" alt="Narim Responsive Wallpaper">

            <br>
            <a href="\Images\Wallpapers\NARIM Home Screen.jpg" download="NARIMwallpaper2020">
                <button class="center-wallpaper">DOWNLOAD WALLPAPER</button>
            </a>



        </div>

        <style>
            html {
                font-family: sans-serif;
                font-size: larger;
            }

            body {
                background-color: #051927;
                background-image: url(https://wallpaperaccess.com/full/655045.jpg)
            }

        

            button {
                font-size: larger;
            }

    

        </style>
        <script></script>
    </body>
    </html>




</asp:Content>
