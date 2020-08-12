package com.maxima.applicationserver.security.repository;

import com.maxima.applicationserver.security.model.Papel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Papel} entity.
 */
public interface PapelRepository extends JpaRepository<Papel, String> {
}
