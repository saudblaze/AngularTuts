using AngularTutorials.models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AngularTutorials.Services
{
    /// <summary>
    /// Summary description for StudentServices
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class StudentServices : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetStudents()
        {
            System.Threading.Thread.Sleep(5000);
            List<Students> objStudents = new List<Students>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Students objStudent = new Students();
                    objStudent.ID = Convert.ToInt32(rdr["ID"]);
                    objStudent.StudentName = Convert.ToString(rdr["StudentName"]);
                    objStudent.RollNo = Convert.ToInt32(rdr["RollNo"]);
                    objStudent.city = Convert.ToString(rdr["city"]);
                    objStudents.Add(objStudent);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(objStudents));
        }

        [WebMethod]
        public void GetStudentByName(string strName)
        {
            List<Students> objStudents = new List<Students>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                //without parameter
                //SqlCommand cmd = new SqlCommand("select * from tblStudents where StudentName like '%" + strName + "%'", con);
                
                //withparam
                SqlCommand cmd = new SqlCommand("select * from tblStudents where StudentName like @name", con);
                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@name",
                    Value = strName + "%"
                };
                cmd.Parameters.Add(param);

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Students objStudent = new Students();
                    objStudent.ID = Convert.ToInt32(rdr["ID"]);
                    objStudent.StudentName = Convert.ToString(rdr["StudentName"]);
                    objStudent.RollNo = Convert.ToInt32(rdr["RollNo"]);
                    objStudent.city = Convert.ToString(rdr["city"]);
                    objStudents.Add(objStudent);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(objStudents));
        }

        [WebMethod]
        public void GetStudent(int id)
        {
            Students student = new Students();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("Select * from tblStudents where ID = @id", con);
                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@id",
                    Value = id
                };
                cmd.Parameters.Add(param);

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    student.ID = Convert.ToInt32(rdr["Id"]);
                    student.StudentName = rdr["StudentName"].ToString();
                    student.city = rdr["city"].ToString();
                    student.RollNo = Convert.ToInt32( rdr["RollNo"]) ;
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));
        }
    }
}
