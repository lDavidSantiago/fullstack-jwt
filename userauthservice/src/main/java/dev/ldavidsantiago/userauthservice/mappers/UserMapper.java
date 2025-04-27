package dev.ldavidsantiago.userauthservice.mappers;


import dev.ldavidsantiago.userauthservice.dto.SignUpDto;
import dev.ldavidsantiago.userauthservice.dto.UserDto;
import dev.ldavidsantiago.userauthservice.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password",ignore = true)
    User signUpToUser(SignUpDto userDto);
}
