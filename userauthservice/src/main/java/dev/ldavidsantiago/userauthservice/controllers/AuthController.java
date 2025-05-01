package dev.ldavidsantiago.userauthservice.controllers;


import dev.ldavidsantiago.userauthservice.config.UserAuthProvider;
import dev.ldavidsantiago.userauthservice.dto.CredentialsDto;
import dev.ldavidsantiago.userauthservice.dto.SignUpDto;
import dev.ldavidsantiago.userauthservice.dto.UserDto;
import dev.ldavidsantiago.userauthservice.mappers.UserMapper;
import dev.ldavidsantiago.userauthservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;
    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto user = userService.login(credentialsDto);

        //Return a fresh JWT
        user.setToken(userAuthProvider.createToken(user.getLogin()));
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) {
        UserDto user = userService.register(signUpDto);
        //Return a fresh JWT
        user.setToken(userAuthProvider.createToken(user.getLogin()));
        return ResponseEntity.created(URI.create("/users/" + user.getId()))
                .body(user);
    }
}
