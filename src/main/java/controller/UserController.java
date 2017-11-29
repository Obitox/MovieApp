package controller;

import model.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService = new UserService();


    @RequestMapping("/createAUser")
        public void createAUser(User user){
            userService.createAUser(user);
        }


}

