<%@ Page Title="" Language="C#" MasterPageFile="~/FPFSite.Master" AutoEventWireup="true" CodeBehind="FPFContact.aspx.cs" Inherits="FourPointFiveWebsite.FPFContact" %>
<asp:Content ID="Content1" ContentPlaceHolderID="CPHead" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="CPBody" runat="server">

  
    <style>
        .form-group label {
            display: block;
        }
    </style>

    <div class="jumbotron">
        <h2 class="text-center">Section 2 Forms Question 1</h2>
        <p>Use your knowledge of HTML5, CSS and Bootstrap to complete the following: </p>
        <ol>
            <li>Style the form and input elements with Bootstrap</li>
            <li>Force the user to complete ALL fields</li>
            <li>Make the user select and age between 15 and 85 (inclusive)</li>
        </ol>
        <p>Don't forget to style the buttons!</p>
    </div>

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="validationDefault01">First Name</label>
                <input class="form-control" type="text" name="firstName" id="validationDefault01" placeholder="First Name" required />
            </div>
            <div class="form-group">
                <label for="validationDefault02">Last Name</label>
                <input class="form-control" type="text" name="lastName" id="validationDefault02" placeholder="Last Name" required />
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="validationDefault03">Age</label>
                    <input class="custom-range" id="validationDefault3" type="range" name="age" min="15" max="85" />
                </div>
            </div>
            <div class="form-group">
                <input class="form-check-input" type="checkbox" name="agree" id="validationDefault4" value="true" required />
                <label class="form-check-label" for="validationDefault04">I have read the terms and conditions</label>
            </div>
            <div class="form-group">
                <button class="btn btn-success" type="submit">Send</button>
                <button class="btn btn-danger" type="reset">Cancel</button>
            </div>
        </div>
    </div>



</asp:Content>
