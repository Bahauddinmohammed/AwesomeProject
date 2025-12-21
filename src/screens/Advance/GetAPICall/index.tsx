import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TitleHeader from '../../../components/TitleHeader';
import { useLazyGetStudentListQuery } from '../../../APIServices/hostApiServices';
import LottieView from 'lottie-react-native';

const GetAPICall = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState<any>(null);

  const [getStudentListAPI] = useLazyGetStudentListQuery();

  const fetchDataHandilor = async () => {
    try {
      setLoading(true);
      const response: any = await getStudentListAPI({}).unwrap();
      console.log('Student List Response:', response);

      setUsersData(response?.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataHandilor();
  }, []);
  return (
    <View>
      <TitleHeader title="GetAPICall Example" />
      <>
        {loading && (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <LottieView
              source={require('../../../assets/images/Empty.json')}
              autoPlay
              loop
              style={{ width: 150, height: 150 }}
            />

            <Text style={{ marginTop: 20, fontSize: 16 }}>
              Loading users, please wait...
            </Text>
          </View>
        )}
      </>

      <>
        {!loading && usersData.length === 0 && (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 18, color: 'red' }}>
              No data available!
            </Text>
          </View>
        )}
      </>

      <>
        {!loading && usersData.length > 0 && (
          <FlatList
            data={usersData}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 15,
                  borderBottomWidth: 1,
                  borderColor: '#ddd',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text>{item.email}</Text>
              </View>
            )}
          />
        )}
      </>
    </View>
  );
};

export default GetAPICall;

const styles = StyleSheet.create({});
