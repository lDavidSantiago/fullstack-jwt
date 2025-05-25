package dev.ldavidsantiago.userauthservice.entities;


import dev.ldavidsantiago.userauthservice.dto.SignUpDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "app_user")
public class User {
    public static User froSignUpDTO(SignUpDto dto) {
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLogin(dto.getLogin());
        user.setPassword(Arrays.toString(dto.getPassword()));
        user.setRole(dto.getRole());
        return user;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name",nullable = false)
    private String firstName;

    @Column(name ="last_name",nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String login;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "rol", nullable = false)
    private Role role;

    public enum Role {
        Cliente, Administrador, Repartidor
    }
}
