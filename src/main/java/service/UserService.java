package service;

import database.ConnectionManager;
import model.User;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class UserService {
    private Statement stmt = null;
    private Connection con = null;
    private ResultSet rs = null;
    private String sql = "";

    private ArrayList<User> listOfAllUsers;

    public UserService() {
        listOfAllUsers = new ArrayList<>();
    }

    public void createAUser(User user){
        if(findUserByUserName(user.getUsername())) {
            sql = "INSERT INTO user(username, password, email, name)" +
                    "VALUES('"+user.getUsername()+"','"+user.getPassword()+"','"+user.getEmail()+"','"+user.getName()+"')";
            con = ConnectionManager.getConnection();
            try {
                stmt = con.prepareStatement(sql);
                stmt.executeUpdate(sql);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    private boolean findUserByUserName(String username){
        sql = "SELECT username FROM user WHERE username='"+username+"'";
        con = ConnectionManager.getConnection();
        try{
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery(sql);
            if(!rs.isBeforeFirst()){
                return true;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

}
