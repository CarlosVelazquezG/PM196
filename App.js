import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView
} from 'react-native';

const API_KEY = '9511ead905d790c2a81450ffeb3391eb';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exactMatch, setExactMatch] = useState(false);

  const searchMovies = async () => {
    if (!query) return;

    setLoading(true);
    setResults([]);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      let filtered = data.results;
      if (exactMatch) {
        filtered = data.results.filter(movie =>
          movie.title.toLowerCase() === query.toLowerCase()
        );
      }

      setResults(filtered);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
            : 'https://via.placeholder.com/100x150?text=No+Image',
        }}
        style={styles.poster}
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <Image 
              source={require('./star-icon.png')} // Asegúrate de tener este icono
              style={styles.starIcon}
            />
            <Text style={styles.rating}>{item.vote_average.toFixed(1)}</Text>
          </View>
          
          <Text style={styles.year}>
            {item.release_date ? item.release_date.split('-')[0] : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Buscar Películas</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar película..."
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={searchMovies}
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchMovies}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Búsqueda exacta</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#4CAF50" }}
            thumbColor={exactMatch ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setExactMatch(previousState => !previousState)}
            value={exactMatch}
          />
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#5E35B1" />
            <Text style={styles.loadingText}>Buscando película</Text>
          </View>
        ) : results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            scrollEnabled={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Image 
              source={require('./search-icon.png')} // Asegúrate de tener este icono
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyText}>
              {query ? "No se encontraron resultados" : "Ingresa un nombre de película para buscar"}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButton: {
    backgroundColor: '#5E35B1',
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#555',
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  movieInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFC107',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  rating: {
    fontWeight: 'bold',
    color: '#333',
  },
  year: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#555',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    opacity: 0.3,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
});