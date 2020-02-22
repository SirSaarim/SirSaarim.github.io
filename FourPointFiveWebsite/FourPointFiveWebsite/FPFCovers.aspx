<%@ Page Title="FPF- Covers" Language="C#" MasterPageFile="~/FPFSite.Master" AutoEventWireup="true" CodeBehind="FPFCovers.aspx.cs" Inherits="FourPointFiveWebsite.FPFHome" %>

<asp:Content ID="Content1" ContentPlaceHolderID="CPHead" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="CPBody" runat="server">
    <h1> ALL COVERS (A-Z) </h1>

    <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
        <HeaderTemplate>
            <div class="card-deck">
        </HeaderTemplate>
        <ItemTemplate>
            <% if (this.cardCount >= 3)
                {
                    cardCount = 0; %>
                        </div> 
            <br />
            <div class="card-deck">
                <% }
                    cardCount++; %>
                <div class="card">
                    <img class="card-img-top" id="playerPic" src="<%#Eval("coverAddress")%>" alt="<%#Eval("id")%> cover released yet.">
                    <div class="card-body">
                        <h3 class="text-center" id="coverNo"><%#Eval("id")%></h3>
                    </div>
                </div>
        </ItemTemplate>

        <FooterTemplate>
            </div>
            <br />
            <div class="col-md-12 align-content-lg-center">
                <p>Covers were last updated on: <%# DateTime.Now.ToShortDateString() %></p>
            </div>
        </FooterTemplate>
    </asp:Repeater>


    <asp:SqlDataSource
        ID="SqlDataSource1"
        runat="server"
        ConnectionString="<%$ ConnectionStrings:ConnectionString %>"
        SelectCommand="SELECT * FROM [CoversAtoZ] ORDER BY [id]"></asp:SqlDataSource>
</asp:Content>
