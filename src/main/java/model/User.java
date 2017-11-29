package model;

import lombok.Data;

@Data
public class User {

    private int user_id;
    private String username;
    private String password;
    private String email;
    private String name;

    public User(String username, String password, String email, String name) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
    }
}
