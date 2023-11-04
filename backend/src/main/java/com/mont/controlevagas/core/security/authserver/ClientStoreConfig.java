package com.mont.controlevagas.core.security.authserver;

import java.time.Duration;
import java.util.Arrays;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.security.oauth2.server.authorization.settings.TokenSettings;

@Configuration
public class ClientStoreConfig {

    @Value("${security.client-id}")
	private String clientId;

	@Value("${security.client-secret}")
	private String clientSecret;
    
    @Bean
    RegisteredClientRepository registeredClientRepository(PasswordEncoder passwordEncoder) {
        RegisteredClient backClient = RegisteredClient
        .withId(UUID.randomUUID().toString())
        .clientId(clientId)
        .clientSecret(passwordEncoder.encode(clientSecret))
        .scope("read")
        .scope("write")
        .authorizationGrantType(new AuthorizationGrantType("password"))
        .redirectUri("https://oidcdebugger.com/debug")         
        .tokenSettings(TokenSettings.builder()
                .accessTokenTimeToLive(Duration.ofDays(30))
                .refreshTokenTimeToLive(Duration.ofDays(30))
                .reuseRefreshTokens(false)
                .build()
            )
        .clientSettings(ClientSettings.builder().build())
        .build();

            RegisteredClient frontClient = RegisteredClient
            .withId(UUID.randomUUID().toString())
            .clientId("client-server")
            .clientSecret(passwordEncoder.encode("client"))
            .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)   
            .redirectUri("http://localhost:5173/auth/callback")         
            .scope("read")
            .scope("write")
            .tokenSettings(TokenSettings.builder()
                .accessTokenTimeToLive(Duration.ofDays(30))
                .refreshTokenTimeToLive(Duration.ofDays(30))
                .reuseRefreshTokens(false)
                .build()
            )
            .clientSettings(ClientSettings.builder()
                .requireAuthorizationConsent(false).build())
            .build();

        return new InMemoryRegisteredClientRepository(Arrays.asList(backClient, frontClient));
    }
}
