using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Capstone_MVP.Model;
using Capstone_MVP.Data;
using Capstone_MVP.Dtos;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
namespace Capstone_MVP.Controllers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Auth;
//using System.Text.RegularExpressions;

[Route("api")]
[ApiController]
public class Capstone_MVP_UserController : Controller
{
    private readonly ICapstone_MVPRepo _capstone_repo;

    public Capstone_MVP_UserController(ICapstone_MVPRepo repository)
    {
        _capstone_repo = repository;
    }
   

    [HttpPost("RegisterAdmin")]
    public ActionResult<string> RegisterAdmin(Admin admin)
    {
        if (_capstone_repo.EmailValid(admin.Email))
        {
            if (_capstone_repo.CheckAdminRegistration(admin.Email) == true)
            {
                _capstone_repo.RegisterAdmin(admin);
                return Ok("Admin successfully registered");
            }
            else
            {
                return Ok("This email is not available");
            }
        }
        else
        {
            return Ok("This is an invalid email");
        }
    }

    [HttpPost("RegisterStudent")]
    public ActionResult<string> RegisterStudent(Student s)
    {
        if (_capstone_repo.EmailValid(s.Email))
        {


            if (_capstone_repo.CheckStudentRegistration(s.Email) == "available")
            {
                _capstone_repo.RegisterStudent(s);
                return Ok("Student successfully registered");
            }
            else if (_capstone_repo.CheckStudentRegistration(s.Email) == "Not available")
            {

                return Ok("This email is not available");
            }
            else
            {
                return Ok("This is not a valid student email, please enter a valid student email");
            }
        }
        else
        {
            return Ok("This is an invalid email");
        }
    }


    [Authorize(AuthenticationSchemes = "MyAuthentication")]
    [Authorize(Policy = "StudentOnly")]
    [HttpGet("GetversionStudent")]
    public ActionResult<string> GetVersionStudent()
    {
        return Ok("1.0.0 (auth)");
    }
    [Authorize(AuthenticationSchemes = "MyAuthentication")]
    [Authorize(Policy = "VisitorOnly")]
    [HttpGet("GetversionVisitor")]
    public ActionResult<string> GetVersionVisitor()
    {
        return Ok("1.0.0 (auth)");
    }
    [Authorize(AuthenticationSchemes = "MyAuthentication")]
    [Authorize(Policy = "AdminOnly")]
    [HttpGet("GetversionAdmin")]
    public ActionResult<string> GetVersionAdmin()
    {
        return Ok("1.0.0 (auth)");
    }

    [HttpPost("RegisterVisitor")]
    public ActionResult<string> RegisterVisitor(Visitor vi)
    {
        if (_capstone_repo.EmailValid(vi.Email))
        {
            if (_capstone_repo.CheckVisitorRegistration(vi.Email) == "available")
            {
                _capstone_repo.RegisterVisitor(vi);
                return Ok("Visitor successfully registered");
            }
            else if (_capstone_repo.CheckVisitorRegistration(vi.Email) == "Not available")
            {

                return Ok("Email is not available");
            }
            else
            {
                return Ok("This is a university email, please enter a non-university email");
            }
        }
        else
        {
            return Ok("This is an invalid email");
        }

    }
}