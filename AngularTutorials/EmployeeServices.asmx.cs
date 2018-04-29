using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace AngularTutorials
{
    /// <summary>
    /// Summary description for EmployeeServices
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeServices : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployee()
        {
            List<Employee> liEmployee = new List<Employee>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection CON = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblEmployee", CON);
                CON.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Employee objemp = new Employee();
                    objemp.Id = Convert.ToInt32( rdr["Id"] );
                    objemp.Name = Convert.ToString(rdr["Name"]);
                    objemp.Gender = Convert.ToString(rdr["Gender"]);
                    objemp.Salary = Convert.ToInt32(rdr["Salary"]);
                    liEmployee.Add(objemp);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(liEmployee));
        }
    }
}
