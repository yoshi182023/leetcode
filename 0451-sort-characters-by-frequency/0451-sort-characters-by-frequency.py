from collections import Counter
class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)
        buckets = [[] for _ in range(len(s)+1)]
        for ch, count in freq.items():
            buckets[count].append(ch)
        res = []
        for count in range(len(s), 0, -1):
            for ch in buckets[count]:
                res.append(ch*count)
        return "".join(res)
        