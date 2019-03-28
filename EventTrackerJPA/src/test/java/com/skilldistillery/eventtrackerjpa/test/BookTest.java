package com.skilldistillery.eventtrackerjpa.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.eventtrackerjpa.entities.Books;

class BookTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Books book;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventTracker");
	}
	
	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}
	
	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		book = em.find(Books.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		book = null;
		em.close();
	}
	
	
	@Test
	void test_mapping_to_db() {
		assertEquals("Becoming",book.getTitle());
	}

}
