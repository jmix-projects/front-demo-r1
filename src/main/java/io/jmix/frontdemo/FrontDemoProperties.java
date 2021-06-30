package io.jmix.frontdemo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.boot.context.properties.bind.DefaultValue;

@ConfigurationProperties(prefix = "front.demo")
@ConstructorBinding
public class FrontDemoProperties {
    private final String admin;
    private final String password;
    private final String restrictedPassword;

    public FrontDemoProperties(
            @DefaultValue("admin") String admin,
            @DefaultValue("{noop}password") String password,
            @DefaultValue("{noop}jmix-demo-restricted") String restrictedPassword) {
        this.admin = admin;
        this.password = password;
        this.restrictedPassword = restrictedPassword;
    }

    public String getAdmin() {
        return admin;
    }

    public String getPassword() {
        return password;
    }

    public String getRestrictedPassword() {
        return restrictedPassword;
    }
}
