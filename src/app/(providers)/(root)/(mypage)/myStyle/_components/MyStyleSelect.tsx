'use client';
import ListSelects from 'app/(providers)/(root)/(post)/list/_components/ListSelect';
import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Tables } from '../../../../../../../types/supabase';
import { createClient } from '@/supabase/client';

type PostItem = Tables<'posts'> & { users: Tables<'users'> | null };

function MyStyleSelect() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [latest, setLatest] = useState('latest');
  const [filteredPosts, setFilteredPosts] = useState<PostItem[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedTab, setSelectedTab] = useState<string>('유형');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false);
  const supabase = createClient();

  // 포스트 리스트 가져오기
  const fetchPosts = useCallback(async (order: string) => {
    const orderColumn = order === 'latest' ? 'created_at' : 'like';
    const { data: postList, error } = await supabase
      .from('posts')
      .select('*,  users(*)')
      .order(orderColumn, { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setPosts(postList);
      setFilteredPosts(postList);
    }
  }, []);

  useEffect(() => {
    fetchPosts(latest);
  }, [latest, fetchPosts]);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLatest(e.target.value);
  };

  const filterPosts = useCallback(() => {
    let filtered: PostItem[] = [...posts];

    Object.keys(selectedOptions).forEach((key) => {
      if (selectedOptions[key].length > 0) {
        if (key === '유형') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].includes(post.gender ?? ''),
          );
        } else if (key === '날씨') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.weather ?? '').includes(option),
            ),
          );
        } else if (key === '계절') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.seasons ?? '').includes(option),
            ),
          );
        } else if (key === '스타일') {
          filtered = filtered.filter((post) =>
            selectedOptions[key].some((option) =>
              (post.style ?? '').includes(option),
            ),
          );
        } else if (key === '장소') {
          filtered = filtered.filter((post) => {
            const locations = Array.isArray(post.locations)
              ? post.locations
              : (post.locations ?? '').split(',');
            return selectedOptions[key].some((option) =>
              locations.includes(option),
            );
          });
        }
      }
    });

    setFilteredPosts(filtered.length > 0 ? filtered : posts);
  }, [selectedOptions, searchTerm, posts]);

  useEffect(() => {
    filterPosts();
  }, [selectedOptions, posts, filterPosts]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      if (!newOptions[selectedTab]) {
        newOptions[selectedTab] = [];
      }
      if (newOptions[selectedTab].includes(option)) {
        newOptions[selectedTab] = newOptions[selectedTab].filter(
          (item) => item !== option,
        );
      } else {
        newOptions[selectedTab].push(option);
      }
      console.log('Selected options:', newOptions); // newOptions가 2개가 동시에 찍힌다 그래서 클릭이 안되는 것 처럼 보인다.
      return newOptions;
    });
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm(searchInput);
      filterPosts();
      setShowSearchDropdown(false); // 드롭다운 닫기
    }
  };

  const handleSearchClick = () => {
    setShowSearchDropdown((prev) => !prev);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div className="mt-2">
        <ListSelects
          handleSortChange={handleSortChange}
          selectedOptions={selectedOptions}
          handleOptionClick={handleOptionClick}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          searchTerm={searchInput}
          setSearchTerm={handleSearchInputChange}
          handleSearch={handleSearch}
          showSearchDropdown={showSearchDropdown}
          handleSearchClick={handleSearchClick}
        />
      </div>

      <div className="flex justify-start items-center gap-[6px] ml-4">
        {Object.entries(selectedOptions).map(([key, options]) =>
          options.map((option) => (
            <div
              key={`${key}-${option}`}
              className=" mb-4 px-[10px] pt-[4px] pb-[6px] bg-black text-white rounded font-KR"
              style={{
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400%',
                lineHeight: '21px',
                letterSpacing: '-0.28px',
              }}
            >
              {option}
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export default MyStyleSelect;
