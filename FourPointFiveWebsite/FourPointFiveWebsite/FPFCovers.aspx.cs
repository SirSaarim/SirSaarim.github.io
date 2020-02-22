using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FourPointFiveWebsite
{
    public partial class FPFHome : System.Web.UI.Page
    {
        protected int cardCount;
        protected void Page_Load(object sender, EventArgs e)
        {
            cardCount = 0;
        }
    }
}