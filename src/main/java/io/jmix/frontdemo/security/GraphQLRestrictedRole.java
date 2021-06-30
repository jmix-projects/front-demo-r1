package io.jmix.frontdemo.security;

import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.security.role.annotation.SpecificPolicy;

@ResourceRole(name = "GraphQLRestrictedRole", code = "graphql-restricted-role")
public interface GraphQLRestrictedRole {
    @SpecificPolicy(resources = "graphql.enabled")
    void specify();
}
