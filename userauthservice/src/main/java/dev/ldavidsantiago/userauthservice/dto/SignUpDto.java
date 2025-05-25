package dev.ldavidsantiago.userauthservice.dto;


import dev.ldavidsantiago.userauthservice.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class SignUpDto {

    private String firstName;
    private String lastName;
    private String login;
    private char[] password;
    private User.Role role ;

}
